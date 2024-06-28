// useUpvote.js
import { StoriesContext } from "@/context/StoriesContext";
import { useContext } from "react";
import { useAuthContext } from "./useAuthContext";
import { baseUrl } from "../../Url";

export const useUpvote = () => {
    const { stories, dispatch: storiesDispatch } = useContext(StoriesContext);
    const { user, token, dispatch } = useAuthContext();

    const upvote = async (storyid) => {
        try {
            const response = await fetch(`${baseUrl}/api/kahani/${storyid}/upvote`, {
                method: "PATCH",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });

            if (!response.ok) {
                return false;
            }

            const result = await response.json();
            dispatch({ type: "UPVOTE", payload: storyid });
            storiesDispatch({ type: "UPVOTE", payload: storyid });

            return result;

        } catch (error) {
            console.error("Failed to upvote:", error);
            return false;
        }
    };

    const isUpvoted = (storyid) => {
        return stories.some(story =>
            story._id === storyid && story.upvotes.includes(user._id)
        );
    };

    const countUpvotes = (storyid) => {
        const story = stories.find(story => story._id === storyid);
        return story ? story.upvotes.length : 0;
    };

    return { upvote, isUpvoted, countUpvotes };
};

import { useContext } from "react";
import { useAuthContext } from "./useAuthContext";
import { StoriesContext } from "@/context/StoriesContext";
import { baseUrl } from "../../Url";

export const useDownVote = () => {
    const { token, dispatch, user } = useAuthContext();
    const { stories, dispatch: StoriesDispatch } = useContext(StoriesContext);

    const downvote = async (storyid) => {
        try {
            const response = await fetch(`${baseUrl}/api/kahani/${storyid}/downvote`, {
                method: "PATCH",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });

            const result = await response.json();

            if (!response.ok) {
                console.log(result);
                return false;
            }

            dispatch({ type: "DOWNVOTE", payload: storyid, user_id: user._id });
            StoriesDispatch({ type: "DOWNVOTE", payload: storyid, user_id: user._id });

            return result;
        } catch (error) {
            console.error("Failed to downvote:", error);
            return false;
        }
    };

    const isDownvoted = (storyid) => {
        return stories.some(story =>
            story._id === storyid && story.downvotes.includes(user._id)
        );
    };

    const countDownvotes = (storyid) => {
        const story = stories.find(story => story._id === storyid);
        return story ? story.downvotes.length : 0;
    };

    return { downvote, isDownvoted, countDownvotes };
};
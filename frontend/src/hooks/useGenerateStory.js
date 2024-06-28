// src/hooks/useGenerateStory.jsx
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StoriesContext } from "@/context/StoriesContext";
import { useAuthContext } from "./useAuthContext";

export const useGenerateStory = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const { dispatch } = useContext(StoriesContext);
    const navigate = useNavigate();
    const { token } = useAuthContext();

    const generateStory = async (prompt) => {
        setError("");
        setLoading(true);
        const description = { description: prompt };

        try {
            const response = await fetch('http://localhost:4000/api/kahani/', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(description)
            });

            const result = await response.json();

            if (!response.ok) {
                setError(result.error);
                setLoading(false);
                return;
            }

            dispatch({ type: "ADD_STORIES", payload: result });

            const { _id } = result;
            navigate(`/dashboard/story/${_id}`);
            
        } catch (err) {
            setError('An error occurred while generating the story.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return { loading, error, generateStory };
};

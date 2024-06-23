import { useAuthContext } from "@/hooks/useAuthContext";
import { createContext, useEffect, useReducer , useState } from "react";

export const StoriesContext = createContext();

export const StoryReducers = (state, action) => {
    const storiesArray = state.stories;

    switch (action.type) {
        case "ADD_STORIES":
            return {
                stories:[action.payload, ...storiesArray]
            };

        case "SET_STORIES":
            return {
                stories: action.payload     
            };

        case "DELETE_STORY":
            return {
                stories: storiesArray.filter((story) => story._id !== action.payload._id)    
            };

        default:
            return state;
    }

};

export const StoriesProvider = ({ children }) => {
    const [state, dispatch] = useReducer(StoryReducers, {
        stories: []
    });
    const [loading, setLoading] = useState(true);
    const { user } = useAuthContext()
    const { token } = user;

    useEffect(() => {
        const fetchStories = async () => {
          try {
            const response = await fetch('http://localhost:4000/api/kahani/all-stories',{
                method:"GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
            });
            const result = await response.json();
            const storiesArray = result['all_stories'];
            dispatch({ type: 'SET_STORIES', payload: storiesArray });
          } catch (error) {
            console.error('Error fetching stories:', error);
          } finally {
            setLoading(false);
          }
        };
    
        fetchStories();
      }, []);

    return (<StoriesContext.Provider value={{ ...state, dispatch ,loading }}>
        {children}
    </StoriesContext.Provider>)
}
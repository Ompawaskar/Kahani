import { createContext, useEffect, useReducer } from "react";

export const StoriesContext = createContext();

export const StoryReducers = (state, action) => {
    const storiesArray = state.stories.all_stories;

    switch (action.type) {
        case "ADD_STORIES":
            return {
                ...state,
                stories: {
                    ...state.stories,
                    all_stories: [action.payload, ...storiesArray]
                }
            };

        case "SET_STORIES":
            return {
                ...state,
                stories: {
                    all_stories: action.payload
                }
            };

        case "DELETE_STORY":
            return {
                ...state.stories,
                stories: {
                    all_stories: storiesArray.filter((story) => story._id !== action.payload._id)
                }
            };

        default:
            return state;
    }

};

export const StoriesProvider = ({ children }) => {
    const [state, dispatch] = useReducer(StoryReducers, {
        stories: JSON.parse(localStorage.getItem('stories')) || []
    });

    useEffect(() => {
        const fetchStories = async () => {
            const response = await fetch('http://localhost:4000/api/kahani/all-stories');
            if (!response.ok) {
                console.log(response.error);
            }
            const result = await response.json();
            const storiesArray = result['all_stories']
            localStorage.setItem('stories', JSON.stringify(storiesArray)); // Save to local storage
            dispatch({ type: 'SET_STORIES', payload: storiesArray });
        };

        if (state.stories.length === 0) {
            fetchStories();
        }
    }, []);


    return (<StoriesContext.Provider value={{ ...state, dispatch }}>
        {children}
    </StoriesContext.Provider>)
}
import { useAuthContext } from "../hooks/useAuthContext";
import { createContext, useReducer } from "react";

export const StoriesContext = createContext();

const storyReducer = (state, action) => {
  const storiesArray = state.stories;
  const user_id = action.user_id; 

  switch (action.type) {
    case "ADD_STORIES":
      return {
        ...state,
        stories: [action.payload, ...storiesArray]
      };

    case "SET_STORIES":
      return {
        ...state,
        stories: action.payload
      };

    case "DELETE_STORY":
      return {
        ...state,
        stories: storiesArray.filter((story) => story._id !== action.payload._id)
      };

    case "STATUS_CHANGE":
      const {status,storyId} = action.payload
      return {
        ...state,
        stories: state.stories.map((story) => {
          if(story._id === storyId){
            return {
              ...story,
              status:status
            }
          }
          return story
        })
      }

      case "UPVOTE":
            return {
                ...state,
                stories: state.stories.map(story => {
                    if (story._id === action.payload) {
                        return {
                            ...story,
                            upvotes: story.upvotes.includes(action.user_id)
                                ? story.upvotes.filter(userId => userId !== action.user_id)
                                : [action.user_id, ...story.upvotes],
                            downvotes: story.downvotes.includes(action.user_id)
                                ? story.downvotes.filter(userId => userId !== action.user_id)
                                : story.downvotes
                        };
                    }
                    return story;
                })
            };
        case "DOWNVOTE":
            return {
                ...state,
                stories: state.stories.map(story => {
                    if (story._id === action.payload) {
                        return {
                            ...story,
                            downvotes: story.downvotes.includes(action.user_id)
                                ? story.downvotes.filter(userId => userId !== action.user_id)
                                : [action.user_id, ...story.downvotes],
                            upvotes: story.upvotes.includes(action.user_id)
                                ? story.upvotes.filter(userId => userId !== action.user_id)
                                : story.upvotes
                        };
                    }
                    return story;
                })
            };

    default:
      return state;
  }
};

export const StoriesProvider = ({ children }) => {
  const { user } = useAuthContext();
  const user_id = user ? user._id : null;
  const [state, dispatch] = useReducer(storyReducer, {
    stories: [],
  });

  const enhancedDispatch = (action) => {
    dispatch({ ...action, user_id });
  };

  return (
    <StoriesContext.Provider value={{ ...state, dispatch: enhancedDispatch }}>
      {children}
    </StoriesContext.Provider>
  );
};

export const useStoriesContext = () => useContext(StoriesContext);

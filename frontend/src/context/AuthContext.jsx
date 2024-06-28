import { createContext, useEffect, useReducer, useState } from "react";

export const AuthContext = createContext();

export const AuthReducers = (state, action) => {
    
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token
            };

        case "LOGOUT":
            return {
                ...state,
                user: null,
                token: null
            };

            case "UPVOTE":
                return {
                    ...state,
                    user: {
                        ...state.user,
                        upvotedPosts: state.user.upvotedPosts.includes(action.payload)
                            ? state.user.upvotedPosts.filter(storyid => storyid !== action.payload)
                            : [...state.user.upvotedPosts, action.payload],
                        downvotedPosts: state.user.downvotedPosts.includes(action.payload)
                            ? state.user.downvotedPosts.filter(storyid => storyid !== action.payload)
                            : state.user.downvotedPosts
                    }
                };
            case "DOWNVOTE":
                return {
                    ...state,
                    user: {
                        ...state.user,
                        downvotedPosts: state.user.downvotedPosts.includes(action.payload)
                            ? state.user.downvotedPosts.filter(storyid => storyid !== action.payload)
                            : [...state.user.downvotedPosts, action.payload],
                        upvotedPosts: state.user.upvotedPosts.includes(action.payload)
                            ? state.user.upvotedPosts.filter(storyid => storyid !== action.payload)
                            : state.user.upvotedPosts
                    }
                };

        default:
            return state
    }
}

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducers, {
        user: null,
        token: null
    })

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const initializeUser = async () => {
            try {
                const userObject = JSON.parse(localStorage.getItem('user'));
                if (userObject) {
                    const { user, token } = userObject;
                    dispatch({ type: "LOGIN", payload: { user, token } });
                }
            } catch (error) {
                console.error('Error initializing user:', error);
            } finally {
                setIsLoading(false);
            }
        };

        initializeUser();
    }, []);

    return (
        <AuthContext.Provider value={{ ...state, dispatch, isLoading }}>
            {children}
        </AuthContext.Provider>
    )
}


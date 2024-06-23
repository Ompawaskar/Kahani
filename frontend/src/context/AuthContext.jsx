import { createContext, useEffect, useReducer } from "react";

export const AuthContext = createContext();

export const AuthReducers = (state,action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                user:action.payload
            }
        case "LOGOUT":
            return {
                user: null
            }
        default:
            return state
    }
}

export const AuthProvider = ({children}) => {
    const [state,dispatch] = useReducer(AuthReducers,{
         user: JSON.parse(localStorage.getItem('user'))
    })

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));

        if(user)
            dispatch({type:"LOGIN",payload:user})

    },[])

    return (
        <AuthContext.Provider value={{...state,dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}


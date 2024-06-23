import { useContext } from "react";
import { useAuthContext } from "./useAuthContext";
import { StoriesContext } from "@/context/StoriesContext";


export const useLogout = () => {
    const { dispatch } = useAuthContext()
    const { dispatch: storiesDispatch } = useContext(StoriesContext)

    const logout = () => {
        localStorage.removeItem('user');

        dispatch({ type: "LOGOUT" })
        storiesDispatch({ type: "SET_STORIES", payload: null })
    }

    return {logout}

}
import { StoriesContext } from "@/context/StoriesContext";
import { useContext } from "react";
import { useAuthContext } from "./useAuthContext";

export const useStatus = () => {
    const {dispatch ,stories} = useContext(StoriesContext);
    const {user , token} = useAuthContext()
    const changeStatus = async (storyId,status) => {
        try {
            const response = await fetch(`http://localhost:4000/api/kahani/${storyId}/status`, {
                method: "PATCH",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({status})
            })

            const result = await response.json();

            if(!response.ok){
                console.log(result.error);
                return
            }

            dispatch({type:"STATUS_CHANGE",payload:{status,storyId}})
        
        } catch (error) {
            console.log(error);
        }
    }

    return {changeStatus}
}
import { useState } from "react"
import { useAuthContext } from "./useAuthContext";
import { baseUrl } from "../../Url";


export const useLogin = () => {
    const [error,setError] = useState("");
    const [loading,setLoading] = useState(false);
    const { dispatch } = useAuthContext();
   
    const login = async (user) => {
        setLoading(true)
        setError("")

        const response = await fetch(`${baseUrl}/api/user/login`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(user)
        })

        const result = await response.json()

        if(!response.ok){
            setLoading(false)
            setError(result.error)
        }

        if(response.ok){
        localStorage.setItem('user',JSON.stringify(result))
        dispatch({type:"LOGIN",payload: result})
        setLoading(false)
        }
             
    }

    return {login,error,loading}
}
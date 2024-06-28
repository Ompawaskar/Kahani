import { useState } from "react"
import { useAuthContext } from "./useAuthContext";

export const useSignUp = () => {
    const [error,setError] = useState("");
    const [loading,setLoading] = useState(false);
    const { dispatch } = useAuthContext();
    
    const signup = async (user) => {
        setLoading(true);
        setError("");
       
            const response = await fetch("http://localhost:4000/api/user/signup",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(user)
            })

            const result = await response.json();

            if(!response.ok){
                setLoading(false)
                setError(result.error)
                return
            }

            localStorage.setItem('user',JSON.stringify(result));
            dispatch({type:"LOGIN",payload:result});
            setLoading(false)

    }

    return {signup,loading,error}
}
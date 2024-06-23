import { useState } from "react"
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(false);
    const { dispatch } = useAuthContext();
    const navigate = useNavigate()

    const login = async (user) => {
        setLoading(true)
        setError(null)

        const response = await fetch("http://localhost:4000/api/user/login",{
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
            return
        }

        localStorage.setItem('user',JSON.stringify(result))
        dispatch({type:"LOGIN",payload:result})
        navigate('/dashboard')
        setLoading(false)
        
    }

    return {login,error,loading}
}
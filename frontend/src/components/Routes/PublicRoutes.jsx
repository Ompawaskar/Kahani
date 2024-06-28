import { useAuthContext } from '@/hooks/useAuthContext'
import React, { Children } from 'react'
import { Navigate } from 'react-router-dom'

function PublicRoutes({children}) {
    const {user,isLoading} = useAuthContext()
    
    if(isLoading){
        return <div>Is Loading</div>
    }
 
    if(user){
        return <Navigate to= {'/dashboard'} />
    }

    return children
}

export default PublicRoutes

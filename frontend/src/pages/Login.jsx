import React from 'react'
import { LoginComponent } from '../components/Login/Login'

function Login() {
    return (
        <div className='flex justify-center items-center min-h-full bg-center bg-cover bg-no-repeat py-32' 
        style={{
            backgroundImage: `url(https://user-images.githubusercontent.com/13468728/233847739-219cb494-c265-4554-820a-bd3424c59065.jpg)`,
          }}>
        
        <LoginComponent />
        
        </div>
    )
}


export default Login

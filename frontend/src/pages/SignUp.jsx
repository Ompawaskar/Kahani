import React from 'react'
import { SignUpComponent } from '../components/SignUp/SignUp'

function SignUp() {
    return (
        <div className='flex justify-center items-center min-h-full bg-center bg-cover bg-no-repeat py-32' 
        style={{
            backgroundImage: `url(https://user-images.githubusercontent.com/13468728/233847739-219cb494-c265-4554-820a-bd3424c59065.jpg)`,
          }}>
        
        <SignUpComponent />
        
        </div>
    )
}


export default SignUp

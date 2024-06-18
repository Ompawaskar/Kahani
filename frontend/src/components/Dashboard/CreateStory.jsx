import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

function CreateStory() {
    return (
        <div className='h-full flex flex-col justify-center items-center'>
            <div className='text-center text-4xl font-sans font-bold mb-6' >
                <h1 >Let's Get Creative: <span className='text-purple-600'>Make Your Own </span></h1>
                <h1 className='text-purple-600 '>Amazing Stories!</h1>
            </div>
            <div className='text-center w-1/2'>
            <Input type='text' placeholder = 'Enter a topic for your story' className = 'w-full mb-4 shadow-md'/>
            </div>
            <Button>Generate Story</Button>
        </div>
    )
}

export default CreateStory

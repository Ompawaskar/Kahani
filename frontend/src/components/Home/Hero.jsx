import React from 'react'
import { Button } from '../ui/button'
import { ArrowRightIcon } from '@radix-ui/react-icons'

function Hero() {
    return (
        <div className='bg-gray-100  w-full h-full py-12 px-16'>
            <div className=' px-6 py-10 bg-white flex flex-col justify-center rounded-lg shadow-sm'>
                <h1 className='text-center text-black font-semibold text-4xl mb-6'>Free AI Story Generator</h1>
                <p className='text-center font-sans mb-6'>Unlock Adventures: Captivating Stories that Ignite Imagination for Children Aged 6-10</p>
                <div className='text-center'>
                <Button className = 'bg-purple-700 rounded-2xl px-4 text-center hover:bg-purple-800'>
                    Get Started for Free <ArrowRightIcon className='ml-2 h-4 w-4' />
                </Button>
                </div>
            </div>
        </div>
    )
}

export default Hero

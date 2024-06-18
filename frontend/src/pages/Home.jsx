import About from '@/components/Home/About'
import Faq from '@/components/Home/Faq'
import Hero from '@/components/Home/Hero'
import React from 'react'

function Home() {
    return (
        <div className='py-2 bg-gray-100'>
            <Hero />
            <About />
            <Faq />
        
        </div>
    )
}

export default Home

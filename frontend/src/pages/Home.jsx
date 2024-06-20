import About from '@/components/Home/About'
import Faq from '@/components/Home/Faq'
import Hero from '@/components/Home/Hero'
import React, { useContext } from 'react'
import { StoriesContext } from '@/context/StoriesContext'

function Home() {

    const {stories,dispatch} = useContext(StoriesContext)
    console.log("Stories",stories);

    return (
        
        <div className='py-2 bg-gray-100'>
            <Hero />
            <About />
            <Faq />
        </div>
    )
}

export default Home

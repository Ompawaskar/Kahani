import React from 'react'

function About() {
    return (
        <div className='flex bg-white flex-col-reverse md:flex-row pt-24 pb-24 gap-4 md:gap-0'>
            <div className='md:w-1/2 ml-8'>
                <div className='w-full mb-4'>
                    <h1 className='font-bold font-sans text-4xl mb-2'>Unleash your creativity</h1>
                    <h1 className='font-semibold font-sans text-4xl'>with captivating stories</h1>
                </div>
                <div className='w-full font-sans pr-16'>
                    <p>Welcome to the world of limitless storytelling possibilities! Our Free AI Story Generator Tool is designed to empower both professional writers and aspiring authors, content creators, and marketing professionals. Whether you seek inspiration for your next novel or need engaging content for your marketing campaigns, our AI-powered tool has got you covered.</p>
                </div>
            </div>
            <div className='md:w-1/2 md:px-16 py-4 px-4'>
                <div className="px-4 bg-cover flex justify-center items-center py-8 rounded-3xl"
                    style={{ backgroundImage: `url(https://pastatic.picsart.com/cms-pastatic/4e9bc2bd-6c5f-47e2-a679-7122299abb5b.svg)` }}>
                    <table className='w-full border-separate text-black font-serif' style={{ borderSpacing: '5px' }}>
                        <tbody>
                            <tr>
                                <td className='bg-red-200 w-[30%] px-4 py-2'>✏️ Set input:</td>
                                <td className='bg-red-200 w-1/2 px-4 py-2'>to child friendly topic.</td>
                            </tr>
                            <tr>
                                <td className='bg-red-200 w-[30%] px-4 py-2'>⭐ 100% free:</td>
                                <td className='bg-red-200 w-1/2 px-4 py-2'>no payment required.</td>
                            </tr>
                            <tr>
                                <td className='bg-red-200 w-[30%] px-4 py-2'>🥳 Set status:</td>
                                <td className='bg-red-200 w-1/2 px-4 py-2'>to public or private.</td>
                            </tr>
                            <tr>
                                <td className='bg-red-200 w-[30%] px-4 py-2'>✅ Upvote:</td>
                                <td className='bg-red-200 w-1/2 px-4 py-2'>whichever you like.</td>
                            </tr>
                        </tbody>
                    </table>


                </div>
            </div>
        </div>
    )
}

export default About

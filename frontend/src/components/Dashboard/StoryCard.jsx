import React from 'react'
import { Link } from 'react-router-dom';


function StoryCard({title,coverImage,_id}) {
  
  return (
    <div className='flex flex-col justify-center items-center'>
  <Link to ={`/dashboard/story/${_id}`}>
    <div className="font-mono w-[15rem] h-[20rem] flex flex-col items-center justify-between mx-0 my-auto bg-cover bg-center hover:scale-90 transition-all ease duration-500 cursor-pointer hover:border-2 border-purple-400"
      style={{
        backgroundImage: `url(${coverImage})`,
      }}>
    </div>
    </Link>
  <Link to ={`/dashboard/story/${_id}`}>
    <div>
      <h1 className='mt-1 text-purple-600 font-bold text-center hover:text-purple-800'>{title}</h1>
    </div>
    </Link>
    </div>

    


  )
}

export default StoryCard

import React from 'react'
import { Button } from '../ui/button';
import { ArrowBigUp, ArrowBigDown } from 'lucide-react'
import { useToast } from "@/components/ui/use-toast"
import { Link } from 'react-router-dom';


function StoryCard({title,coverImage,_id}) {
  const { toast } = useToast()
  
  return (
  <Link to ={`/dashboard/story/${_id}`}>
    <div className="font-mono w-[15rem] h-[20rem] flex flex-col items-center justify-between mx-0 my-auto bg-cover bg-center hover:scale-90 transition-all ease duration-500 cursor-pointer"
      style={{
        backgroundImage: `url(${coverImage})`,
      }}>
      <h1 className='font-bold text-xl'>{title}</h1>
      <div className='flex justify-between opacity-75 gap-8 bg-transparent'>

        <Button variant='outline' size='icon' className='bg-transparent border-none hover:bg-transparent hover:scale-110'
          onClick={() => {
            console.log("Upvote");
            toast({
              description: "Upvoted",
               className:"bg-black text-white"
            })
          }}>
          <ArrowBigUp className='h-8 w-8' />
        </Button>

        <Button variant='outline' size='icon' className='bg-transparent border-none hover:bg-transparent hover:scale-110'
          onClick={() => {
            toast({
              description: "Downvoted",
              className:"bg-black text-white"
            })
          }}>
          <ArrowBigDown className='h-8 w-8' />
        </Button>

      </div>


    </div>

    </Link>


  )
}

export default StoryCard

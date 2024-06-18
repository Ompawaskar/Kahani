import React from 'react'
import { Button } from '../ui/button';
import { ArrowBigUp, ArrowBigDown } from 'lucide-react'
import { useToast } from "@/components/ui/use-toast"


function StoryCard() {
  const { toast } = useToast()

  return (

    <div className="font-mono w-[15rem] h-[20rem] flex flex-col items-center justify-between mx-0 my-auto bg-cover bg-center hover:scale-90 transition-all ease duration-500 cursor-pointer"
      style={{
        backgroundImage: `url('example.png')`,
      }}>
      <h1 className='font-bold text-xl'>Lion and Mowgli</h1>
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


  )
}

export default StoryCard

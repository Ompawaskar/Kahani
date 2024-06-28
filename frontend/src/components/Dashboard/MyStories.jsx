import React, { useContext } from 'react'
import { Button } from '../ui/button'
import StoryCard from './StoryCard'
import { ScrollArea } from "@/components/ui/scroll-area"
import { Link } from 'react-router-dom'
import { StoriesContext } from '../../context/StoriesContext'
import { useAuthContext } from '@/hooks/useAuthContext'


function MyStories() {
  const { stories } = useContext(StoriesContext)
  const { user } = useAuthContext();

  let userStories = [];

  if(stories){
    userStories = stories.filter((story) => story.user_id === user._id)
  }
  
  if (!userStories || userStories.length === 0) {
    return (
      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        
        <div
          className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm" x-chunk="dashboard-02-chunk-1"
        >
          <div className="flex flex-col items-center gap-1 text-center">
            <h3 className="text-2xl font-bold tracking-tight">
              You have no Stories
            </h3>
            <p className="text-sm text-muted-foreground">
              You can see Stories as soon as you create.
            </p>
            <Link
              to='/dashboard'>
              <Button className="mt-4">Generate Story</Button>
            </Link>
          </div>
        </div>
      </main>
    )
  }

  else {
    return (
      <ScrollArea className=" rounded-md border p-4">
        <div className='max-h-screen grid grid-cols-1 md:grid-cols-3 gap-4 m-8'>
          {userStories.map((story) => <StoryCard
            key={story._id}
            _id={story._id}
            title={story.title}
            coverImage={story.images && story.images.length > 0 ? story.images[0] : './logo1.png'} // Add fallback for missing images
          />)}
        </div>
      </ScrollArea>
    )
  }




}

export default MyStories

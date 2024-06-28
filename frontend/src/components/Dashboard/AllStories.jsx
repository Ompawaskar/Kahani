import React, { useContext } from 'react'
import { Button } from '../ui/button'
import StoryCard from './StoryCard'
import { ScrollArea } from "@/components/ui/scroll-area"
import { Link } from 'react-router-dom'
import { StoriesContext } from '../../context/StoriesContext'

function AllStories() {
  const { stories } = useContext(StoriesContext);
  let publicStories = [];
  
  if(stories){
    publicStories = stories.filter((story) => story.status === 'public')
  }
  
  if (!publicStories || publicStories.length === 0) { 
    return (
      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        
        <div
          className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm" x-chunk="dashboard-02-chunk-1"
        >
          <div className="flex flex-col items-center gap-1 text-center">
            <h3 className="text-2xl font-bold tracking-tight">
              There are no Public Stories Available.
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
      <ScrollArea className="rounded-md border p-4">
        <div className='max-h-screen grid grid-cols-1 gap-4 m-8 md:grid-cols-3'>
          {publicStories.map((story) => <StoryCard
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

export default AllStories

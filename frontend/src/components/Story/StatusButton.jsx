import React, { useContext, useState ,useEffect } from 'react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { StoriesContext } from '@/context/StoriesContext';
import { useStatus } from '@/hooks/useStatus';


function StatusButton({ story_id }) {
  const { stories } = useContext(StoriesContext);
  const story = stories.find(elem => elem._id === story_id)
  const [status, setStatus] = useState(story ? story.status : "Inactive");
  const { changeStatus } = useStatus();

  useEffect(() => {
    if (story) {
      setStatus(story.status);
    }
  }, [story]);

  const handleStatusChange = async (newStatus) => {
    setStatus(newStatus);
    const result = await changeStatus(story_id,newStatus);

    if(!result){
      setStatus(story.status)
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Status</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={status === 'private'}
          className={status !== 'private' ? 'text-muted-foreground' : " "}
          onCheckedChange={() => handleStatusChange('private')}
        >
          Private
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={status === 'public'}
          className={status !== 'public' ? 'text-muted-foreground' : " "}
          onCheckedChange={() => handleStatusChange('public')}
        >
          Public
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default StatusButton

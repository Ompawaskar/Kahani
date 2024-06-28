import { StoriesContext } from '@/context/StoriesContext';
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuthContext } from '@/hooks/useAuthContext';
import StoryCard from './StoryCard';
import { ScrollArea } from "@/components/ui/scroll-area"

function UserStories() {
    const { user_id } = useParams();
    const { stories } = useContext(StoriesContext);
    const { user } = useAuthContext();

    const userStories = stories.filter((story) => story.user_id === user_id);
    const userObject = user.find((elem) => elem._id === user_id);

    return (
        <div>
            {userObject ? (
                <>
                    <div>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <h2>{userObject.username}</h2>
                    </div>
                    <div>
                        {userStories.length > 0 ? (
                            <ScrollArea className="rounded-md border p-4">
                                <div className='max-h-screen grid grid-cols-1 gap-4 m-8 md:grid-cols-3'>
                                    {userStories.map((story) => (
                                        <StoryCard
                                            key={story._id}
                                            _id={story._id}
                                            title={story.title}
                                            coverImage={story.images && story.images.length > 0 ? story.images[0] : './logo1.png'}
                                        />
                                    ))}
                                </div>
                            </ScrollArea>
                        ) : (
                            <p>No stories found for this user.</p>
                        )}
                    </div>
                </>
            ) : (
                <p>User not found.</p>
            )}
        </div>
    );
}

export default UserStories;

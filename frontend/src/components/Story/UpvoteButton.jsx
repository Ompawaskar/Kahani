import React, { useState, useCallback, useEffect } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { useUpvote } from '../../hooks/useUpvote';
import { ArrowBigUp } from 'lucide-react';

function UpvoteButton({ story_id }) {
    const { isUpvoted, countUpvotes, upvote } = useUpvote();
    const [upvoted, setUpvoted] = useState(isUpvoted(story_id));
    const [upvoteCount, setUpvoteCount] = useState(countUpvotes(story_id));
    const { toast } = useToast();

    useEffect(() => {
        setUpvoted(isUpvoted(story_id));
        setUpvoteCount(countUpvotes(story_id));
    }, [isUpvoted, countUpvotes, story_id]);

    const handleUpvote = useCallback(async () => {
        const newUpvotedState = !upvoted;
        const newCount = upvoteCount + (newUpvotedState ? 1 : -1);
        setUpvoteCount(newCount);
        setUpvoted(newUpvotedState);

        const result = await upvote(story_id);

        if (!result) {
            setUpvoteCount(prevCount => prevCount + (newUpvotedState ? -1 : 1));
            setUpvoted(!newUpvotedState);
        } else {
            toast({ description: 'Upvoted!' });
        }
    }, [upvoted, upvoteCount, upvote, story_id, toast]);

    return (
        <div className="flex justify-center items-center gap-2" role="button" aria-pressed={upvoted} onClick={handleUpvote}>
            <ArrowBigUp
                className='h-12 w-12 hover:scale-90 cursor-pointer'
                fill={upvoted ? 'green' : 'white'}
                aria-label={upvoted ? 'Unupvote' : 'Upvote'}
            />
            <span className="upvote-count">{upvoteCount}</span>
        </div>
    );
}

export default UpvoteButton;

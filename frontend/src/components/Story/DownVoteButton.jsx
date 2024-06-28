import { useDownVote } from '@/hooks/useDownVote';
import { ArrowBigDown } from 'lucide-react';
import React, { useState, useEffect, useCallback } from 'react';
import { useToast } from '../ui/use-toast';

function DownVoteButton({ story_id }) {
    const { downvote, isDownvoted, countDownvotes } = useDownVote();
    const [downvoted, setDownvoted] = useState(isDownvoted(story_id));
    const [downvoteCount, setDownvoteCount] = useState(countDownvotes(story_id));
    const { toast } = useToast();

    useEffect(() => {
        setDownvoted(isDownvoted(story_id));
        setDownvoteCount(countDownvotes(story_id));
    }, [isDownvoted, countDownvotes, story_id]);

    const handleDownvote = useCallback(async () => {
        const newDownvotedState = !downvoted;
        const newCount = downvoteCount + (newDownvotedState ? 1 : -1);
        setDownvoteCount(newCount);
        setDownvoted(newDownvotedState);

        const result = await downvote(story_id);

        if (!result) {
            setDownvoteCount(prevCount => prevCount + (newDownvotedState ? -1 : 1));
            setDownvoted(!newDownvotedState);
        } else {
            toast({ description: 'Downvoted!' });
        }
    }, [downvoted, downvoteCount, downvote, story_id, toast]);

    return (
        <div className="flex justify-center items-center gap-2" role="button" aria-pressed={downvoted} onClick={handleDownvote}>
            <ArrowBigDown
                className='h-12 w-12 hover:scale-90 cursor-pointer'
                fill={downvoted ? 'red' : 'white'}
                aria-label={downvoted ? 'Undownvote' : 'Downvote'}
            />
            <span className="downvote-count">{downvoteCount}</span>
        </div>
    );
}

export default DownVoteButton;
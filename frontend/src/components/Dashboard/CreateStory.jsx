// src/components/Dashboard/CreateStory.jsx
import React, { useState } from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { ReloadIcon } from "@radix-ui/react-icons";
import { useGenerateStory } from '@/hooks/useGenerateStory';
import { useOutletContext } from 'react-router-dom';

function CreateStory() {
    const [prompt, setPrompt] = useState("");
    const { error, generateStory } = useGenerateStory();
    const {isLoading, setIsLoading} = useOutletContext()
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        await generateStory(prompt);
        setIsLoading(false);
        setPrompt("");
    }

    return (
        <div className='h-full flex flex-col justify-center items-center'>
            <div className='text-center text-4xl font-sans font-bold mb-6'>
                <h1>Let's Get Creative: <span className='text-purple-600'>Make Your Own</span></h1>
                <h1 className='text-purple-600'>Amazing Stories!</h1>
            </div>
            <form onSubmit={handleSubmit} className='w-3/4 text-center md:w-1/2'>
                <Input
                    type='text'
                    placeholder='Enter a topic for your story'
                    className='w-full mb-4 shadow-md'
                    onChange={(e) => setPrompt(e.target.value)}
                    value={prompt}
                    required
                    disabled = {isLoading}
                />
                {isLoading ? (
                    <Button disabled>
                        <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                        Please wait
                    </Button>
                    
                ) : (
                    <Button type="submit">Generate Story</Button>
                )}
                {error && <p className='text-red-500 font-semibold mt-2'>{error}</p>}
            </form>
        </div>
    );
}

export default CreateStory;

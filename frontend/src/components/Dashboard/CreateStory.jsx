import React, { useContext, useState } from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { StoriesContext } from '../../context/StoriesContext';
import { useNavigate } from 'react-router-dom';
import { ReloadIcon } from "@radix-ui/react-icons"

function CreateStory() {
    const [prompt, setPrompt] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const { state, dispatch } = useContext(StoriesContext)
    const navigate = useNavigate()

    const generateStory = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);
        const description = {"description":prompt}

        try {
            const response = await fetch('http://localhost:4000/api/kahani/', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body:JSON.stringify(description)
            });

            const result = await response.json()

            if (!response.ok) {
                setPrompt(null)
                setError(result.error);
                setLoading(false)
                console.log("Prompt" ,prompt);
                return 
            }

            // Add item to context and local storage
            let exsistingStories = localStorage.getItem('stories');

            let StoriesArray = exsistingStories ? JSON.parse(exsistingStories)['all_stories'] : [];

            StoriesArray.unshift(result);

            localStorage.setItem('stories', JSON.stringify({ 'all_stories': StoriesArray }));

            dispatch({ type: "ADD_STORIES", payload: result });

            //Navigate
            const { _id } = result;
            navigate(`/dashboard/story/${_id}`)
            

        } catch (error) {
            console.log(error);
        }finally{
            setLoading(false);
        }
    }

    return (
        
        <div className='h-full flex flex-col justify-center items-center'>
            <div className='text-center text-4xl font-sans font-bold mb-6' >
                <h1 >Let's Get Creative: <span className='text-purple-600'>Make Your Own </span></h1>
                <h1 className='text-purple-600 '>Amazing Stories!</h1>
            </div>
            <form action="" onSubmit={generateStory} className='w-1/2 text-center'>
            
                <Input type='text' placeholder='Enter a topic for your story' className='w-full mb-4 shadow-md'
                    onChange={(e) => {
                        setPrompt(e.target.value)
                    }} value={prompt} required />
           
            {loading ? <Button disabled>
                <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                Please wait
            </Button> : <Button>Generate Story</Button>}

            {error ? <p className='text-red-500 font-semibold mt-2'>{error}</p> : ""}
            </form>  
        </div>
      
    )
}

export default CreateStory

import React, { useContext, useRef, useState } from 'react'
import { ScrollArea } from "@/components/ui/scroll-area"
import { Input } from '../ui/input'
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from '../ui/button'
import { Search, Trash2Icon } from 'lucide-react'
import { useNavigate, useParams } from 'react-router-dom'
import { StoriesContext } from '../../context/StoriesContext'
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"
import { ReloadIcon } from "@radix-ui/react-icons"


function Story() {
    const { id } = useParams();
    const { stories, dispatch } = useContext(StoriesContext)
    const { all_stories } = stories
    const { toast } = useToast()
    const [question, setQuestion] = useState(null);
    const [loading, setLoading] = useState(false)
    const [audioUri, setAudioUri] = useState(null)
    // const {state} = useContext(StoriesContext)

    const StoryObject = all_stories.find(obj => obj._id === id);
    const navigate = useNavigate()

    if (!StoryObject) {
        <div>Story Not Found</div>
    }

    const deleteStory = async () => {
        try {
            const response = await fetch(`http://localhost:4000/api/kahani/${id}`, {
                method: "DELETE",
            });

            const result = await response.json()

            if (!response.ok) {
                toast({
                    variant: "destructive",
                    title: result.error,
                    description: "There was a problem with your delete request.",
                    action: <ToastAction altText="Try again">Try again</ToastAction>,
                })
                return
            }

            // Delete item fro  context and local storage
            let exsistingStories = localStorage.getItem('stories');

            let StoriesArray = exsistingStories ? JSON.parse(exsistingStories)['all_stories'] : [];

            const updatedStories = StoriesArray.filter((story) => story._id !== result._id);

            localStorage.setItem('stories', JSON.stringify({ 'all_stories': updatedStories }));

            // console.log("State",state);
            console.log("Storeee", stories);
            dispatch({ type: "DELETE_STORIES", payload: result });

            //Navigate
            navigate(`/dashboard/all-stories`)


        } catch (error) {
            console.log(error);
        }
    }

    const answerQuestion = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const response = await fetch(`http://localhost:4000/api/kahani/question`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    _id: id,
                    question: question
                })
            });

            const result = await response.json()

            if (!response.ok) {
                toast({
                    variant: "destructive",
                    title: result.error,
                    description: "There was a problem generating your answer. Please Try Again Later",
                    action: <ToastAction altText="Try again">Try again</ToastAction>,
                })
                return
            }

            setAudioUri(result.answer);

        }

        catch (err) {
            console.log(err);
        }

        finally {
            setQuestion(null)
            setLoading(false)
        }

    }

    return (
        <div className='m-4'>
            <div className='flex justify-between items-center px-8'>
                <h1 className='text-center font-bold text-3xl font-sans mt-2'>{StoryObject.title}</h1>
                <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <Button variant="destructive" size='icon' className='border-none' >
                            <Trash2Icon className='h-4 w-4' />
                        </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                                This action cannot be undone. This will permanently delete your
                                story.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={deleteStory}>Continue</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </div>
            <div className='flex mt-4'>
                <div className='w-1/2 flex justify-center items-center'>
                    <ScrollArea className="h-[250px] w-[350px] rounded-md border-none font-sans font-semibold p-4 shadow-md">
                        {StoryObject.story}
                    </ScrollArea>

                </div>
                <div className='w-1/2 flex justify-center items-center'>
                    <Carousel className="w-full max-w-xs"
                        plugins={[
                            Autoplay({
                                delay: 5000,
                            }),
                        ]}>
                        <CarouselContent>
                            {StoryObject.images.map((url) => (
                                <CarouselItem key={StoryObject._id}>
                                    <div className="p-1">
                                        <Card>
                                            <CardContent className="flex aspect-square items-center justify-center p-6">
                                                <img src={url} alt="" className='bg-cover bg-center' />
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>

            </div>
            <div className='mt-8 flex justify-center items-center'>
                <form className='w-1/2 flex gap-2' onSubmit={answerQuestion}>
                    <Input type='text' placeholder='Enter any Questions here..' className='shadow-sm' value={question} onChange={(e) => {
                        setQuestion(e.target.value)
                    }} />
                    {loading ? <Button disabled className='bg-white'>
                        <ReloadIcon className="mr-2 h-4 w-4 animate-spin bg-white" color="rgb(147 51 234)" />
                         </Button> : 
                         <Button variant='outline' size='icon' className='border-none '>
                        <Search className='h-8 w-8' color="rgb(147 51 234)" />
                         </Button>}

                    {audioUri && <audio
                        src={audioUri}
                        className="hidden"
                        autoPlay>
                    </audio>}
                </form>
            </div>
        </div>
    )
}

export default Story


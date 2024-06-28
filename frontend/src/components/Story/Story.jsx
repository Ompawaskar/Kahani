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
import { LoaderIcon } from "lucide-react"
import UpvoteButton from './UpvoteButton'
import { useAuthContext } from '@/hooks/useAuthContext'
import StatusButton from './StatusButton'
import DownVoteButton from './DownVoteButton'
import { baseUrl } from '../../../Url'

function Story() {
    const { id } = useParams();
    const { stories, dispatch, loading } = useContext(StoriesContext)
    const { toast } = useToast();
    const [question, setQuestion] = useState("");
    const [loadingState, setLoadingState] = useState(false);
    const [audioUri, setAudioUri] = useState("")
    const StoryObject = stories.find(obj => obj._id === id);
    const navigate = useNavigate();
    const { user, token } = useAuthContext();
    const story = stories.find((story) => story._id === id)

    if (loading) {
        return (
            <div className='flex items-center justify-center h-full'>
                <LoaderIcon className="animate-spin w-full text-purple-500 h-[100px]" />
            </div>
        )
    }

    if (!StoryObject) {
        return <div>Story Not Found</div>; // Return statement added
    }

    const deleteStory = async () => {
        try {
            const response = await fetch(`${baseUrl}/api/kahani/${id}`, {
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
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

            dispatch({ type: "DELETE_STORY", payload: result });

            //Navigate
            navigate(`/dashboard/all-stories`)


        } catch (error) {
            console.log(error);
        }
    }

    const answerQuestion = async (e) => {
        e.preventDefault()
        setLoadingState(true)
        try {
            const response = await fetch(`${baseUrl}/api/kahani/question`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`

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
            setQuestion("")
            setLoadingState(false)
        }

    }

    return (
        <div className='m-4'>
            <div className='flex justify-between items-center md:px-8 mt-2 mb-6'>
                <h1 className='text-center font-bold text-3xl font-sans'>{StoryObject.title}</h1>
                {story.user_id === user._id ? <div className='flex justify-center items-center gap-4'>
                    <StatusButton story_id={id} />
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
                </div> : null}

            </div>
            <div className='flex md:flex-row flex-col justify-center items-center mt-8 md:mt-1 gap-2 md:gap-0'>
                <div className='md:w-1/2 flex justify-center items-center'>
                    <ScrollArea className="h-[250px] w-[350px] rounded-md border border-purple-400 font-sans font-semibold p-4 shadow-md">
                        {StoryObject.story}
                    </ScrollArea>

                </div>
                <div className='md:w-1/2 flex flex-col justify-center items-center'>
                    <Carousel className="w-full max-w-xs"
                        plugins={[
                            Autoplay({
                                delay: 5000,
                            }),
                        ]}>
                        <CarouselContent>
                            {StoryObject.images.map((url) => (
                                <CarouselItem key={url}>
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
            <div className='flex flex-col-reverse md:flex-row mt-8 gap-4 md:gap-0'>
            <div className=' flex justify-center items-center md:w-1/2 mx-8'>
                    <form className='w-full flex gap-2' onSubmit={answerQuestion}>
                        <Input type='text' placeholder='Enter any Questions here..' className='shadow-sm' value={question} required onChange={(e) => {
                            setQuestion(e.target.value)
                        }} />
                        {loadingState ? <Button disabled className='bg-white'>
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
                <div className=' flex justify-center items-center gap-2  md:w-1/2'>

                    <UpvoteButton story_id={id} />
                    <DownVoteButton story_id={id} />
                </div>
                

            </div>


        </div>
    )
}

export default Story


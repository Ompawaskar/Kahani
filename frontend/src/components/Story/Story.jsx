import React from 'react'
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
import { Search, Trash2Icon, TrashIcon } from 'lucide-react'


function Story() {
    return (
        <div className='m-4'>
            <div className='flex justify-between items-center px-8'>
                <h1 className='text-center font-bold text-3xl font-sans mt-2'>Brave Polar Bear and Wise Eagle</h1>
                <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <Button variant="destructive" size='icon' className='border-none '>
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
                            <AlertDialogAction>Continue</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </div>
            <div className='flex mt-4'>
                <div className='w-1/2 flex justify-center items-center'>
                    <ScrollArea className="h-[250px] w-[350px] rounded-md border-none font-sans font-semibold p-4">
                        Jokester began sneaking into the castle in the middle of the night and leaving
                        jokes all over the place: under the king's pillow, in his soup, even in the
                        royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
                        then, one day, the people of the kingdom discovered that the jokes left by
                        Jokester were so funny that they couldn't help but laugh. And once they
                        started laughing, they couldn't stop.
                    </ScrollArea>

                </div>
                <div className='w-1/2 flex justify-center items-center'>
                    <Carousel className="w-full max-w-xs"
                        plugins={[
                            Autoplay({
                                delay: 2000,
                            }),
                        ]}>
                        <CarouselContent>
                            {Array.from({ length: 5 }).map((_, index) => (
                                <CarouselItem key={index}>
                                    <div className="p-1">
                                        <Card>
                                            <CardContent className="flex aspect-square items-center justify-center p-6">
                                                <span className="text-4xl font-semibold">{index + 1}</span>
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
                <div className='w-1/2 flex gap-2'>
                    <Input type='text' placeholder='Enter any Questions here..' />
                    <Button variant='outline' size='icon' className='border-none '>
                        <Search className='h-8 w-8' color="rgb(147 51 234)" />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Story


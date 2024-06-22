import { Link } from "react-router-dom"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"

export function LoginComponent() {
  return (
    <Card className="mx-auto bg-transparent backdrop-blur-55 text-white md:w-[30%] font-poppins">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-center pb-6">Login</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2 pb-2">
            <Label htmlFor="email">Email</Label>
            <input 
            id="email"
            type="email" 
            required
            className=' bg-transparent border-0 border-b-2 rounded-none h-3/4 py-1 pl-1 hover:bg-transparent hover:border-b-2 hover:border-current focus:outline-none'
            />
          </div>
          <div className="grid gap-2 pb-6">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
            </div>
            <input 
            id="password"
            type="password" 
            required
            className=' bg-transparent border-0 border-b-2 rounded-none h-3/4 py-1 pl-1 hover:bg-transparent hover:border-b-2 hover:border-current focus:outline-none'
            />
          </div>
          <Button type="submit" className="w-full text-black bg-white hover:bg-white hover:opacity-80 rounded-lg">
            Login
          </Button>
        </div>
        <div className="mt-4 text-center text-sm pb-8">
          Don&apos;t have an account?{" "}
          <Link href="#" className="underline">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

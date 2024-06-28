import { Link } from "react-router-dom"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { useForm } from "react-hook-form"
import { useLogin } from "@/hooks/useLogin"
import { ReloadIcon } from "@radix-ui/react-icons"


export function LoginComponent() {
  const { register, handleSubmit } = useForm();
  const {login,error,loading} = useLogin();

  const loginUser = async (data) => {
    await login(data)
  }

  return (
    <Card className="mx-auto bg-transparent backdrop-blur-55 text-white md:w-[30%] font-poppins">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-center pb-6">Login</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="grid gap-4" onSubmit={handleSubmit(loginUser)}>
          <div className="grid gap-2 pb-2">
            <Label htmlFor="email">Email</Label>
            <input 
            id="email"
            type="email" 
            required
            {...register("email",{required:true})}
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
            {...register("password",{required:true})}
            className=' bg-transparent border-0 border-b-2 rounded-none h-3/4 py-1 pl-1 hover:bg-transparent hover:border-b-2 hover:border-current focus:outline-none'
            />
          </div>
          {loading ? <Button disabled>
            <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
            Please wait
          </Button> : <Button type="submit" className="w-full text-black bg-white hover:bg-white hover:opacity-80 rounded-lg">
            Login
          </Button>}
          {error ? <p className="text-red-600 text-center">{error}</p> : ""}

        </form>
        <div className="mt-4 text-center text-sm pb-8">
          Don&apos;t have an account?{" "}
          <Link to='/signup' className="underline">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

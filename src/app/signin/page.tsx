"use client"

import axios from "axios"
import Link from "next/link"
import { useRouter } from "next/navigation"
import React from "react"
import toast from "react-hot-toast"

const Signin = () => {

  const router = useRouter();

  const [user, setUser] = React.useState({
    email: "",
    password: "",
  })

  const [disable, setDisable] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onSignIn = async () => {
    try {
      console.log("Ok inside hited");
      setLoading(true);
      const response = await axios.post('/api/users/signin', user);
      console.log("Login Sunncessfully", response.data);
      toast.success("Login successfully");
      router.push(`/profile/${user.email}`)
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message)
    }finally{
      setLoading(false)
    }
  }

  React.useEffect(() => {
    if(user.email.length > 0 && user.password.length > 0){
      setDisable(false)
    }else{
      setDisable(true)
    }
  }, [user])

  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl text-purple-500">{loading ? "Processing..." : "Sign In"}</h1>
      <hr />
      <label htmlFor="email">Email</label>
      <input 
        className="p-2 rounded-xl outline-1 focus:outline-purple-500 focus:shadow-xl focus:shadow-purple-500/10"
        id="email"
        type="email"
        placeholder="Enter email"
        value={user.email}
        onChange={(e) => setUser({...user, email: e.target.value})}
        />
      <label htmlFor="password">Password</label>
      <input 
        className="p-2 rounded-xl outline-1 focus:outline-purple-500 focus:shadow-xl focus:shadow-purple-500/10"
        id="password"
        type="password"
        placeholder="Enter password"
        value={user.password}
        onChange={(e) => setUser({...user, password: e.target.value})}
        />  
        <button onClick={onSignIn} className="border-2 border-purple-500 rounded-xl px-3 py-1 mt-3 bg-purple-400 text-white">Sign in</button>
        <Link href='/signup' className="underline hover:text-blue-600">Visit to Sign up</Link>
    </div>
    </div>
  )
}
export default Signin

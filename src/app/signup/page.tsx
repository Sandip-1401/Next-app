"use client"

import axios from "axios"
import Link from "next/link"
import { useRouter } from "next/navigation"
import React from "react"
import toast from "react-hot-toast"

const signup = () => {

  const route = useRouter();

  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: ""
  })

  const [disable, setDisable] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onSignUp = async () => {
    try {
      setLoading(true);
      console.log("SANDIP")
      const responce = await axios.post('/api/users/signup', user);
      console.log("Sign up success", responce.data);
      route.push('/signin')
    } catch (error: any) {
      toast.error("Something went wrong..!", error.message)
    }finally{
      setLoading(false);
    }
  }

  React.useEffect(() => {
    if(user.username.length > 0 && user.email.length > 0 && user.password.length > 0){
      setDisable(false)
    }else{
      setDisable(true)
    }
  }, [user])

  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl text-purple-500">{loading ? "Processing..." : "Sign Up"}</h1>
      <hr />
      <label htmlFor="username">Username</label>
      <input 
        className="p-2 rounded-xl outline-1 focus:outline-purple-500 focus:shadow-xl focus:shadow-purple-200"
        id="username"
        type="text"
        placeholder="Enter Username"
        value={user.username}
        onChange={(e) => setUser({...user, username: e.target.value})}
        />
      <label htmlFor="email">Email</label>
      <input 
        className="p-2 rounded-xl outline-1 focus:outline-purple-500 focus:shadow-xl focus:shadow-purple-200"
        id="email"
        type="email"
        placeholder="Enter email"
        value={user.email}
        onChange={(e) => setUser({...user, email: e.target.value})}
        />
      <label htmlFor="password">Password</label>
      <input 
        className="p-2 rounded-xl outline-1 focus:outline-purple-500 focus:shadow-xl focus:shadow-purple-200"
        id="password"
        type="password"
        placeholder="Enter password"
        value={user.password}
        onChange={(e) => setUser({...user, password: e.target.value})}
        />  
        <button onClick={onSignUp} className="border-2 border-purple-500 rounded-xl px-3 py-1 mt-3 bg-purple-400 text-white">{disable ? "No Signup" : "Sign Up"}</button>
        <Link href='/signin' className="underline hover:text-blue-600">Visit to Sign In</Link>
    </div>
    </div>
  )
}

export default signup

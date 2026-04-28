"use client"

import Link from "next/link"
import React from "react"

const Signin = () => {

  const [user, setUser] = React.useState({
    email: "",
    password: "",
  })

  const onSignIn = async () => {

  }

  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl text-purple-500">Sign In</h1>
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
        <button onSubmit={onSignIn} className="border-2 border-purple-500 rounded-xl px-3 py-1 mt-3 bg-purple-400 text-white">Sign in</button>
        <Link href='/signup' className="underline hover:text-blue-600">Visit to Sign up</Link>
    </div>
    </div>
  )
}
export default Signin

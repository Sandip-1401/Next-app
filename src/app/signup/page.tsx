"use client"

import Link from "next/link"
import React from "react"

const signup = () => {

  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: ""
  })

  const onSignUp = async () => {

  }

  return (
    <div className="bg-white text-black">
      <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl text-purple-500">Sign Up</h1>
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
        <button onSubmit={onSignUp} className="border-2 border-purple-500 rounded-xl px-3 py-1 mt-3 bg-purple-400 text-white">Sign Up</button>
        <Link href='/signin' className="underline hover:text-blue-600">Visit to Sign In</Link>
    </div>
    </div>
  )
}

export default signup

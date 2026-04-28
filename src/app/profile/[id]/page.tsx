import React from 'react'

const UserProfile = async ({params}: any) => {

   const { id } = await params

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl">Profile</h1>
      <hr />
      <p className='text-3xl'>Profile Page <span className='bg-orange-500 p-2 rounded-lg text-black'>{id}</span></p>
    </div>
  )
}

export default UserProfile

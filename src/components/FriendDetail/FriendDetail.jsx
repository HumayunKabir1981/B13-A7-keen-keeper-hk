import React from 'react'
import { useLoaderData } from 'react-router';

 const FriendDetail = () => {

    const  friend  = useLoaderData();
  return (
    <div className='p-10'>
      <img src={friend.picture} className='w-32 rounded-full' />
      <h1 className='text-3xl font-bold'>{friend.name}</h1>
      <p>{friend.email}</p>
      <p>{friend.bio}</p>
      <p>Status: {friend.status}</p>
    </div>
  )
}

export default FriendDetail;
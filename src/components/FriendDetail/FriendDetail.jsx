import React from 'react'
import { useLoaderData } from 'react-router';


 const FriendDetail = () => {

    const  friend  = useLoaderData();
  return (
    <div className=' flex p-10'>

<div>

      <img src={friend.picture} className='w-32 rounded-full' />
      <h1 className='text-3xl font-bold'>{friend.name}</h1>
       <p  className={`px-3 py-1 rounded-full text-white text-sm w-fit ${
                       friend.status === "overdue"
                      ? "bg-red-500"
                      : friend.status === "almost due"
                       ? "bg-yellow-500"
                    : "bg-green-900"
                              }`}
                  >
                 {friend.status}
                </p>

                <p className='px-3 py-1 rounded-full bg-green-300 text-sm w-fit my-3'>
                {friend.tags[0]}
              </p>
      <p>{friend.bio}</p>
      <p>Status: {friend.status}</p>
</div>

        <div className='flex flex-col gap-10'>

          <div className='flex gap-5'>
            <div className='text-center flex flex-col gap-3'>
                        <h3 className='text-2xl text-[#244d3f]'>{friend.days_since_contact}</h3>
                        <p className='text-xl text-[#64748B]'>Days since Contact</p>
                    </div>
            <div className='text-center flex flex-col gap-3'>
                        <h3 className='text-2xl text-[#244d3f]'>{friend.goal}</h3>
                        <p className='text-xl text-[#64748B]'>Goal (Days)</p>
                    </div>
            <div className='text-center flex flex-col gap-3'>
                        <h3 className='text-xl text-[#244d3f]'>{friend.next_due_date}</h3>
                        <p className='text-xl text-[#64748B]'>Next Due</p>
                    </div>
          </div>

          <div>
            <h2 className='text-xl'>Relationship Goal</h2>
            <p>Connect every <span className='font-bold'>30 days</span> </p>
          </div>

          <div className='flex flex-col'>
            <div>
              <h2 className='text-xl'>Quick Check-In</h2>
            </div>
            <div className=' flex w-full gap-24'>
              <div>
                <span>Img</span>
                <p>call</p>
              </div>
              <div>
                <span>Img</span>
                <p>text</p>
              </div>
              <div>
                <span>Img</span>
                <p>video</p>
              </div>
            </div>
          </div>

          <div>
            <div className='flex justify-between'>
              <h2>Recent Interactions</h2>
              <p>Full History</p>
            </div>
            <div>

              <div className='flex gap-3 justify-between'>
                <div>Img</div>
                <div>
                  <h2>Text</h2>
                  <p>Asked for career advice</p>
                </div>

                <div>Jan 28, 2026</div>
              </div>
              <div className='flex gap-3 justify-between'>
                <div>Img</div>
                <div>
                  <h2>Text</h2>
                  <p>Asked for career advice</p>
                </div>

                <div>Jan 28, 2026</div>
              </div>
              <div className='flex gap-3 justify-between'>
                <div>Img</div>
                <div>
                  <h2>Text</h2>
                  <p>Asked for career advice</p>
                </div>

                <div>Jan 28, 2026</div>
              </div>
              <div className='flex gap-3 justify-between'>
                <div>Img</div>
                <div>
                  <h2>Text</h2>
                  <p>Asked for career advice</p>
                </div>

                <div>Jan 28, 2026</div>
              </div>
              


            </div>
          </div>
          
        </div>

    </div>
  )
}

export default FriendDetail;
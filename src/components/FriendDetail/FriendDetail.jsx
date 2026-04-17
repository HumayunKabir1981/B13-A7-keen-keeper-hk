import React from 'react'
import { useLoaderData } from 'react-router';
import callImg from '../../../src/assets/call.png'
import textImg from '../../../src/assets/text.png'
import videoImg from '../../../src/assets/video.png'
import { useContext } from 'react';
import { TimelineContext } from '../../context/TimelineContext';
import { useNavigate } from 'react-router';
import { RiNotificationSnoozeLine } from "react-icons/ri";
import { GoArchive } from "react-icons/go";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaHistory } from "react-icons/fa";
import { toast } from 'react-toastify';


const FriendDetail = () => {

  const friend = useLoaderData();

  const { addToTimeline } = useContext(TimelineContext);
  

  const handleAction = (type, img) => {
    const newData = {
      name: friend.name,
      type,
      date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      img
    };

    addToTimeline(newData);    
    toast.success(
  <span>
     <span className="font-bold">{type}</span> with {friend.name} 
  </span>
);
   
  };

  return (
    <div className='w-full md:w-4/5 lg-w-4/5 mx-auto grid  grid-cols-1 lg:grid-cols-5 p-10 gap-10'>

      <div className=' flex flex-col gap-5 lg:col-span-2  '>
        <div className='shadow flex flex-col justify-center items-center text-center gap-3 p-10'>
          <img src={friend.picture} className='w-32 rounded-full' />
          <h1 className='text-3xl font-bold'>{friend.name}</h1>
          <p className={`px-3 py-1 rounded-full text-white text-sm w-fit ${friend.status === "overdue"
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
          <p className='text-gray-400'>Preferred: email</p>
        </div>

        <div >
          <button className="px-16 flex w-full justify-center items-center gap-2 p-3 cursor-pointer shadow rounded-lg">
            <span><RiNotificationSnoozeLine /></span>
            <span>Snooze 2 weeks</span>
          </button>
        </div>
        <div >
          <button className="px-16 flex w-full justify-center items-center gap-2 p-3 cursor-pointer  shadow rounded-lg">
            <span><GoArchive /></span>
            <span>Archive</span>
          </button>
        </div>
        <div >
          <button className=" text-red-500 px-16 flex w-full justify-center items-center gap-2 p-3 cursor-pointer  shadow rounded-lg">
            <span><RiDeleteBin6Line /></span>
            <span>Delete</span>
          </button>
        </div>





      </div>

      <div className='flex flex-col gap-10 lg:col-span-3 p-5'>

        <div className='flex flex-col md:flex-row justify-between gap-10 '>
          <div className='text-center flex flex-col gap-3 rounded-xl w-full shadow'>
            <h3 className='text-2xl text-[#244d3f]'>{friend.days_since_contact}</h3>
            <p className='text-xl text-[#64748B]'>Days since Contact</p>
          </div>
          <div className='text-center flex flex-col gap-3 rounded-xl w-full shadow'>
            <h3 className='text-2xl text-[#244d3f]'>{friend.goal}</h3>
            <p className='text-xl text-[#64748B]'>Goal (Days)</p>
          </div>
          <div className='text-center flex flex-col gap-3 rounded-xl w-full shadow'>
            <h3 className='text-xl text-[#244d3f]'>{friend.next_due_date}</h3>
            <p className='text-xl text-[#64748B]'>Next Due</p>
          </div>
        </div>

        <div className=' flex flex-col md:flex-row justify-between shadow'>
          <div>
            <h2 className='text-xl'>Relationship Goal</h2>
            <p>Connect every <span className='font-bold'>30 days</span> </p>
          </div>
          <div>
            <button className='btn'>Edit</button>
          </div>

        </div>

        <div className='flex flex-col  px-5'>
          <div>
            <h2 className='text-xl'>Quick Check-In</h2>
          </div>
          <div className=' flex flex-col md:flex-row w-full gap-24'>
            <div>
              <button onClick={() => handleAction("Call", callImg)}
                className="px-16 flex flex-col items-center gap-2 p-3 shadow-sm  rounded-lg cursor-pointer">
                <img src={callImg} />
                <span>Call</span>
              </button>
            </div>
            <div>
              <button onClick={() => handleAction("Text", textImg)}
                className="px-16 flex flex-col items-center gap-2 p-3 shadow-sm  rounded-lg cursor-pointer">
                <img src={textImg} />
                <span>Text</span>
              </button>
            </div>
            <div>
              <button onClick={() => handleAction("Video", videoImg)}
                className="px-16 flex flex-col items-center gap-2 p-3 shadow-sm rounded-lg cursor-pointer">
                <img src={videoImg} />
                <span>Video</span>
              </button>
            </div>

          </div>
        </div>

        <div className='flex flex-col gap-5'>
          <div className='flex flex-col md:flex-row justify-between'>
            <h2 className='text-2xl'>Recent Interactions</h2>
            <button className="px-16 flex  justify-center items-center gap-2 p-3 shadow rounded-lg">
              <span><FaHistory /></span>
              <span>Full History</span>
            </button>

          </div>

          <div className='flex flex-col gap-5'>

            <div className='flex flex-col md:flex-row gap-3 justify-between shadow'>
              <div className='flex items-center gap-3'>
                <div><img src={textImg} /></div>
                <div>
                  <h2 className='text-xl'>Text</h2>
                  <p>Asked for career advice</p>
                </div>
              </div>
              <div>Jan 28, 2026</div>
            </div>

            <div className='flex flex-col md:flex-row gap-3 justify-between shadow'>
              <div className='flex items-center gap-3'>
                <div><img src={callImg} /></div>
                <div>
                  <h2 className='text-xl'>Meetup</h2>
                  <p>Industry conference meetup</p>
                </div>
              </div>
              <div>Jan 28, 2026</div>
            </div>

            <div className='flex flex-col md:flex-row gap-3 justify-between shadow'>
              <div className='flex items-center gap-3'>
                <div><img src={videoImg} /></div>
                <div>
                  <h2 className='text-xl'>Video</h2>
                  <p>Asked for career advice</p>
                </div>
              </div>
              <div>Jan 28, 2026</div>
            </div>

            <div className='flex flex-col md:flex-row gap-3 justify-between shadow'>
              <div className='flex items-center gap-3'>
                <div><img src={textImg} /></div>
                <div>
                  <h2 className='text-xl'>Text</h2>
                  <p>Asked for career advice</p>
                </div>
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
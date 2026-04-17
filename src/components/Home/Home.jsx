import React, { useState, useEffect } from 'react';
import { IoMdAdd } from "react-icons/io";
import { useLoaderData } from 'react-router';
import Friends from '../Friends/Friends';


const Home = () => {

    const  friends  = useLoaderData();

  
    return (
        
        <div className='w-4/5 mx-auto'>            

            <div className='mt-20'>
                <div className='text-center flex flex-col justify-center items-center gap-5 my-10'>
                    <h1 className='text-6xl text-[#1f2937] font-bold'>Friends to keep close in your life</h1>
                    <p>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br/>
                     relationships that matter most.</p>
                    <button className='btn btn-neutral bg-[#244d3f] flex items-center  gap-2'> <IoMdAdd />Add a Friend</button>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-10'>
                    <div className='text-center flex flex-col gap-3'>
                        <h3 className='text-4xl text-[#244d3f]'>10</h3>
                        <p className='text-xl text-[#64748B]'>Total Friends</p>
                    </div>
                    <div className='text-center flex flex-col gap-3'>
                        <h3 className='text-4xl text-[#244d3f]'>3</h3>
                        <p className='text-xl text-[#64748B]'>On Track</p>
                    </div>
                    <div className='text-center flex flex-col gap-3'>
                        <h3 className='text-4xl text-[#244d3f]'>6</h3>
                        <p className='text-xl text-[#64748B]'>Need Attention</p>
                    </div>
                    <div className='text-center flex flex-col gap-3'>
                        <h3 className='text-4xl text-[#244d3f]'>12</h3>
                        <p className='text-xl text-[#64748B]'>Interactions This Month</p>
                    </div>                
              
                </div>

            </div>

           <div><h2 className='text-2xl font-bold text-[#1f2937] mt-10 mb-5'>Your Friends</h2></div>
    <div >
      <Friends friends={friends} />
    </div>
            
        </div>
    );
};

export default Home;
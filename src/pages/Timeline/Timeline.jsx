import React from 'react';
import { useContext } from 'react';
import { TimelineContext } from '../../context/TimelineContext';


const Timeline = () => {
    const { timeline } = useContext(TimelineContext);
    return (
        <div className="p-10">
            <h2 className="text-2xl mb-5">Timeline</h2>

            {timeline.map((item, index) => (
                <div key={index} className="flex items-center gap-5 border p-3 mb-3 rounded-lg">
                    <img src={item.img} className="w-10 h-10" />

                    <div >
                        <div className='flex items-center gap-3'>
                            <p> <span className='text-xl'>{item.type}</span> with</p>
                            <h3 className="">{item.name}</h3>
                            
                        </div>

                        <div className="ml-auto">{item.date}</div>
                    </div>



                </div>
            ))}
        </div>
    );
};

export default Timeline;
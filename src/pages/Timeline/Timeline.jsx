import React, { useState } from 'react';
import { useContext } from 'react';
import { TimelineContext } from '../../context/TimelineContext';


const Timeline = () => {
    const { timeline } = useContext(TimelineContext);
    const [search, setSearch] = useState("");
    const filteredTimeline = timeline.filter(item =>
        item.type.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="p-10">
            <h2 className="text-2xl mb-5">Timeline</h2>
            <select
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border p-2 mb-5 rounded-lg"
            >
                <option value=""> Filter timeline </option>
                <option value="call">Call</option>
                <option value="text">Text</option>
                <option value="video">Video</option>
            </select>

            {filteredTimeline.map((item, index) => (
                <div key={index} className="flex items-center gap-5 border p-3 mb-3 rounded-lg">
                    <img src={item.img} className="w-10 h-10" />
                    <div>
                        <div className='flex gap-2'>
                            <p>{item.type}</p>
                            <span>with</span>
                            <h3 className="font-bold">{item.name}</h3>

                        </div>

                        <div className="ml-auto">{item.date}</div>
                    </div>



                </div>
            ))}

        </div>
    );
};

export default Timeline;
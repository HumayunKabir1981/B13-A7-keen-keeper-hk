import React, { useContext } from 'react';
import { TimelineContext } from '../../context/TimelineContext';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { ResponsiveContainer } from 'recharts';

const Stats = () => {
    const { timeline } = useContext(TimelineContext);
    if (timeline.length === 0) {
        return (
            <div className="h-[80vh] flex flex-col justify-center items-center text-center">
                <h2 className="text-3xl font-bold text-gray-600">No Data Available</h2>
                <p className="text-gray-400 mt-2">
                    Add some interactions to see analytics
                </p>
            </div>
        );
    }

    const counts = {
        Call: 0,
        Text: 0,
        Video: 0
    };

    timeline.forEach(item => {
        if (counts[item.type] !== undefined) {
            counts[item.type]++;
        }
    });


    const data = [
        { name: 'Call', value: counts.Call },
        { name: 'Text', value: counts.Text },
        { name: 'Video', value: counts.Video }
    ];

    const COLORS = ['#22c55e', '#3b82f6', '#f97316'];

    return (
        <div className='w-3/5 mx-auto'>
            <h1 className='text-4xl font-bold text-[#1f2937] mb-5'>
                Friendship Analytics
            </h1>





            <p className='mb-5'>By Interaction Type</p>

            <ResponsiveContainer width="100%" height={400}>

                <PieChart width={400} height={400}>
                    <Pie
                        data={data}
                        innerRadius={100}
                        outerRadius={150}
                        cornerRadius={10}
                        paddingAngle={5}
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={index} fill={COLORS[index]} />
                        ))}
                    </Pie>

                    <Tooltip />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>

        </div>
    );
};

export default Stats;
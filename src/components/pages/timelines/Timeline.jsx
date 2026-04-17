import React, { useContext, useState } from 'react';
import { TimelineContext } from '../../../context/TimelineProvider';
import call from "/assets/call.png";
import text from "/assets/text.png";
import video from "/assets/video.png";

const Timeline = () => {
    const {timeline} = useContext(TimelineContext)
    const [filter,setFilter] = useState('All')
    const displayFilter = filter=='All'?timeline:timeline.filter(item=>item.type.toLowerCase()==filter.toLowerCase())
    return (
        <div className=' bg-gray-50 pb-12 pt-16'>
            <div className='max-w-[80%] mx-auto'>
                <h1 className='text-3xl font-bold mb-6'>Timeline</h1>
                <select onChange={(e)=>setFilter(e.target.value)} className='sm:w-1/10 mb-6 outline-1 outline-gray-200'>
                    <option>All</option>
                    <option>Call</option>
                    <option>Text</option>
                    <option>Vedio</option>
                </select>
                {displayFilter.length==0?
                (<div className='flex justify-center items-center py-20 text-4xl font-bold text-red-600 text-center'>No Activities Found!</div>):
            (displayFilter.map(item=>(
                <div className='flex items-center gap-2 p-3 rounded-lg bg-white shadow mb-4'>
                    <img className='w-5' src={`${item.type=='call'?call:item.type=='vedio'?video:text}`}></img>
                    <div>
                        <h1 className='text-gray-500'><span className='font-medium text-black text-lg'>{`${item.type=='call'?'Call':item.type=='vedio'?'Video':'Text'}`} </span> with {item.name}</h1>
                        <p className='text-gray-500 text-sm'>{item.date}</p>
                    </div>
                </div>
            ))
            )}
            </div>
        </div>
    );
};

export default Timeline;
import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { RiNotificationSnoozeLine } from "react-icons/ri";
import { FiArchive } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import call from "/assets/call.png";
import text from "/assets/text.png";
import video from "/assets/video.png";

const Details = () => {
    const { id } = useParams()
    const friends = useLoaderData()
    const expectedFriend = friends.find(friend => friend.id == id)
    if (!expectedFriend) {
        return <div className='flex justify-center items-center py-40 text-4xl text-red-500'>No Data Fount!</div>
    }
    return (
        <div className='bg-gray-50 py-20'>
            {/* grid part */}
            <div className='max-w-[80%] mx-auto grid grid-cols-2 lg:grid-cols-3 gap-5'>
                <div className='col-span-2 lg:col-span-1 space-y-3'>
                    <div className=' bg-white shadow rounded-lg flex flex-col justify-center items-center p-5'>
                        <img src={expectedFriend.picture} className='rounded-full w-full max-w-[80px]'></img>
                        <h2 className='my-1.5 font-semibold text-xl'>{expectedFriend.name}</h2>
                        <div className={`badge text-white rounded-2xl ${expectedFriend.status == "on-track" ? "bg-[#244D3F]" : expectedFriend.status == 'overdue' ? "bg-red-600" : "bg-amber-500"}`}>{expectedFriend.status}</div>
                        <div className='flex gap-2 items-center my-2'>
                            {
                                expectedFriend.tags.map(t => (
                                    <div className='badge text-[#244D3F] bg-green-100 rounded-2xl font-medium'>{t}</div>
                                ))
                            }
                        </div>
                        <i className='text-sm text-gray-500 my-1.5 text-center'>"{expectedFriend.bio}"</i>
                        <p className='text-xs font-medium text-gray-400'>Preferred: {expectedFriend.email}</p>
                    </div>
                    <div className='flex justify-center items-center gap-1.5 bg-white rounded-lg shadow py-4 font-medium text-gray-700'>
                        <RiNotificationSnoozeLine />
                        Snooze {expectedFriend.days_since_contact > 6 ? expectedFriend.days_since_contact / 7 : expectedFriend.days_since_contact} {expectedFriend.days_since_contact > 6 ? "Weeks" : "Days"}
                    </div>
                    <div className='flex justify-center items-center gap-1.5 bg-white rounded-lg shadow py-4 font-medium text-gray-700'>
                        <FiArchive />
                        Archive
                    </div>
                    <div className='flex justify-center items-center gap-1.5 bg-white rounded-lg shadow py-4 font-medium text-red-500'>
                        <RiDeleteBinLine />
                        Delete
                    </div>
                </div>
                {/* second div */}
                <div className='col-span-2 grid sm:grid-cols-3 gap-5 grid-rows-4'>
                    <div className='text-center py-6 rounded-lg bg-white shadow space-y-1 col-span-3 sm:col-span-1'>
                        <h1 className='text-[#244D3F] text-3xl font-bold'>{expectedFriend.days_since_contact}</h1>
                        <p className='text-gray-500'>Days Since Contact</p>
                    </div>
                    <div className='text-center py-6 rounded-lg bg-white shadow space-y-1 col-span-3 sm:col-span-1'>
                        <h1 className='text-[#244D3F] text-3xl font-bold'>{expectedFriend.goal}</h1>
                        <p className='text-gray-500'>Goal (Days)</p>
                    </div>
                    <div className='text-center py-6 rounded-lg bg-white shadow space-y-1 col-span-3 sm:col-span-1'>
                        <h1 className='text-[#244D3F] text-3xl font-bold'>{expectedFriend.next_due_date}</h1>
                        <p className='text-gray-500'>Next Due</p>
                    </div>
                    <div className='flex justify-between col-span-3 bg-white rounded-lg px-5 pt-5 shadow'>
                        <div className='space-y-1'>
                            <h1 className='text-lg font-extrabold text-[#244D3E]'>Realationhip Goal</h1>
                            <h2 className='font-bold'><span className='font-normal text-gray-500'>Conect every</span> {expectedFriend.goal} days</h2>
                        </div>
                        <div className='flex items-start justify-center'>
                            <button className='btn'>Edit</button>
                        </div>
                    </div>
                    <div className='col-span-3 row-span-2  p-5 bg-white shadow'>
                        <h2 className='font-extrabold text-lg text-[#244D3E] mb-4'>Quick Check-In</h2>
                        <div className='grid grid-cols-3 gap-3'>
                            <div className='bg-gray-100 shadow rounded-lg py-4 flex flex-col items-center justify-center gap-1.5'>
                                <img src={call}></img>
                                <p>Call</p>
                            </div>
                            <div className='bg-gray-100 shadow rounded-lg py-4 flex flex-col items-center justify-center gap-1.5'>
                                <img src={text}></img>
                                <p>Text</p>
                            </div>
                            <div className='bg-gray-100 shadow rounded-lg py-4 flex flex-col items-center justify-center gap-1.5'>
                                <img src={video}></img>
                                <p>Video</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* grid part */}
        </div>
    );
};

export default Details;
import React from 'react';

const Card = ({friends}) => {
    return (
        <div className='grid min-[557px]:grid-cols-2 min-[939px]:grid-cols-3 min-[1261px]:grid-cols-4 gap-6'>
            {
                friends.map(friend=>(
                    <div key={friend.id} className='border border-gray-50 bg-white shadow flex flex-col items-center justify-center px-3 py-6 rounded-xl'>
                        <img src={friend.picture} className='rounded-full w-full max-w-[80px]'></img>
                        <h2 className='my-1.5 font-semibold text-xl'>{friend.name}</h2>
                        <p className='text-xs text-gray-500 font-medium'>{friend.days_since_contact}d ago</p>
                        <div className='flex gap-2 items-center my-2'>
                            {
                                friend.tags.map(t=>(
                                    <div className='badge text-[#244D3F] bg-green-100 rounded-2xl font-medium'>{t}</div>
                                ))
                            }
                        </div>
                        <div className={`badge text-white rounded-2xl ${friend.status=="on-track"?"bg-[#244D3F]":friend.status=='overdue'?"bg-red-600":"bg-amber-500"}`}>{friend.status}</div>
                    </div>
                ))
            }
        </div>
    );
};

export default Card;
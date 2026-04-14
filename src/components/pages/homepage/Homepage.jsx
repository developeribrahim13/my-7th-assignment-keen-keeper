import React from 'react';

const Homepage = () => {
    return (
        <div className='bg-gray-50'>
        <div className='max-w-[80%] mx-auto pt-10 pb-13 sm:pt-16'>
        <div className='text-center space-y-5'>
            <h1 className='font-bold text-4xl sm:text-5xl'>Friends to keep close in your life</h1>
            <p className='text-sm text-gray-500'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br className='max-[615px]:hidden'/> relationships that matter most.</p>
            <button className='btn bg-[#244D3F] text-white'>+ Add a Friend</button>
        </div>
        <div className='py-5 border-b border-gray-200 mb-5 grid grid-cols-4 gap-6'>
            <div className='text-center py-6 rounded-xl bg-white shadow space-y-1'>
                <h1 className='text-[#244D3F] text-2xl font-bold'>10</h1>
                <p className='text-gray-400 text-sm'>Total Frieds</p>
            </div>
            <div className='text-center py-6 rounded-xl bg-white shadow space-y-1'>
                <h1 className='text-[#244D3F] text-2xl font-bold'>3</h1>
                <p className='text-gray-400 text-sm'>On Track</p>
            </div>
            <div className='text-center py-6 rounded-xl bg-white shadow space-y-1'>
                <h1 className='text-[#244D3F] text-2xl font-bold'>6</h1>
                <p className='text-gray-500 text-sm'>Need Attention</p>
            </div>
            <div className='text-center py-6 rounded-xl bg-white shadow space-y-1'>
                <h1 className='text-[#244D3F] text-2xl font-bold'>12</h1>
                <p className='text-gray-500 text-sm'>Interactions This Month</p>
            </div>
        </div>
        </div>
        </div>
    );
};

export default Homepage;
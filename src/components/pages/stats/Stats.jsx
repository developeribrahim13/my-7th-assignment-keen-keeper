import { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { TimelineContext } from '../../../context/TimelineProvider';

const Stats = () => {
    const {timeline} = useContext(TimelineContext)
    const callCount = timeline.filter(item => item.type == 'call').length;
    const textCount = timeline.filter(item => item.type == 'text').length;
    const videoCount = timeline.filter(item => item.type == 'vedio').length;

    const data = [
  { name: 'Text', value: textCount, fill: '#6C50B4' },
  { name: 'Call', value: callCount, fill: '#244d3e' },
  { name: 'Video', value: videoCount, fill: '#1C9641' },
];
    return (
        <div className='bg-gray-50 pt-14 pb-12'>
        <div className='max-w-[80%] mx-auto'>
            <h1 className='text-4xl font-bold'>FriendShip Analytics</h1>
        <div className='border border-slate-300 rounded-lg bg-white mt-3 flex flex-col justify-center items-center py-6'>
            <h3 className=' w-full pl-3 pt-1'>By Interection Type</h3>
           <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        // Corner radius is the rounded edge of each pie slice
        cornerRadius="50%"
        fill="#8884d8"
        // padding angle is the gap between each pie slice
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={true}
      />
      <Legend/>
      <Tooltip/>
    </PieChart>
        </div>
        </div>
        </div>
    );
};

export default Stats;
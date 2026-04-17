import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const TimelineContext = createContext();

const TimelineProvider = ({children}) => {
    
   const [timeline, setTimeline] = useState([])
   
    const handleTimeline = (freindId, friendName, type) => {
        const newObj = {
            friendId: freindId,
            name: friendName,
            type: type,
            date: new Date().toLocaleDateString('en-GB',{
                month: 'long',
                day: 'numeric',
                year: 'numeric'
            }),
        }
      setTimeline([newObj,...timeline])
      toast.success(`${type} with ${friendName} added to timeline!`)
    }

    const data = {
        handleTimeline,
        timeline,
    }
    
    return (
       <TimelineContext.Provider value={data}>{children}</TimelineContext.Provider>
    );
};

export default TimelineProvider;
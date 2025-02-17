import React from 'react'
import TodayIcon from '@mui/icons-material/Today';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const AcceptTaks = ({ele}) => {
  return (
    <div className='bg-[1C1E27] w-[350px] h-full p-5 rounded-2xl flex flex-col justify-between flex-shrink-0 border-l border-purple-600'>
         <div className='flex item-end justify-between'>
             <button className='bg-red-600 px-3 py-1 rounded'>{ele.category}</button>
             <h1 className='flex items-center gap-1 opacity-60'><TodayIcon /> {ele.date}</h1>
         </div>
         <div className='flex flex-col font-medium gap-2 mt-6'>
             <span className='text-xl'>{ele.title}</span>
             <h2>{ele.description}</h2>
         </div>
         <div className='flex justify-between m-3 '>
           <button className='bg-red-600 rounded px-4 py-1 item-end'>Completed</button>
           <button className='bg-green-600 rounded px-4 py-1'>Faild</button>
           <div className='flex items-center  gap-1 opacity-60'><AccessTimeIcon /> 20 min</div>
         </div>
       </div>
  )
}

export default AcceptTaks

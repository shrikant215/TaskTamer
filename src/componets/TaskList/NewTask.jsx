import React from 'react'

const NewTask = ({ele}) => {
  return (
    <div className='bg-blue-600 w-[350px] h-full p-5 rounded-2xl flex flex-col justify-between flex-shrink-0 '>
    <div className='flex item-end justify-between'>
        <button className='bg-red-600 px-3 py-1 rounded'>{ele.category}</button>
        <h1>{ele.date}</h1>
    </div>
    <div className='flex flex-col font-medium gap-2 mt-6'>
        <span className='text-xl'>{ele.title}</span>
        <h2>{ele.description}</h2>
    </div>
    <div className='flex justify-between m-3 '>
      <button className='bg-red-600 rounded px-4 py-1 item-end'>Completed</button>
      <button className='bg-green-600 rounded px-4 py-1'>Faild</button>
    </div>
  </div>
  )
}

export default NewTask

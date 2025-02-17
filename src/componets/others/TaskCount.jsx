import React from 'react'

function TaskCount({data}) {
  return (
    <div className='flex mt-10 justify-between gap-5 screen mx-5 font-medium'>
      <div className='bg-[#1C1E27] border-l-4 border-purple-600  flex item-start w-[45%] py-6 px-9 flex-col rounded-xl'>
        <h1 className='text-3xl font-medium text-purple-500'>{data.taskCount.active}</h1>
        <h2 className='text-xl font-medium text-purple-600'>Active Task</h2>
      </div>
      <div className='bg-[#1C1E27] border-l-4 border-blue-600 flex item-start w-[45%] py-6 px-9 flex-col rounded-xl'>
        <h1 className='text-3xl font-medium text-blue-500'>{data.taskCount.newTask}</h1>
        <h2 className='text-xl font-medium text-blue-600'> New Task </h2>
      </div>
      <div className='bg-[#1C1E27] border-l-4 border-green-600 flex item-start w-[45%] py-6 px-9 flex-col rounded-xl'>
        <h1 className='text-3xl font-medium text-green-500'>{data.taskCount.completed}</h1>
        <h2 className='text-xl font-medium text-green-600'>Completed Task</h2>
      </div>
      <div className='bg-[#1C1E27] border-l-4 border-yellow-500 flex item-start w-[45%] py-6 px-9 flex-col rounded-xl'>
        <h1 className='text-3xl font-medium text-yellow-500'>{data.taskCount.failed}</h1>
        <h2 className='text-xl font-medium text-yellow-500'>Failed Task </h2>
      </div>
      
    </div>
  )
}

export default TaskCount

import React from 'react'

function TaskCount({data}) {
  return (
    <div className='flex mt-10 justify-between gap-5 screen mx-5 font-medium'>
      <div className='bg-red-600 flex item-start w-[45%] py-6 px-9 flex-col rounded-xl'>
        <h1 className='text-3xl font-medium '>{data.taskCount.active}</h1>
        <h2 className='text-xl font-medium'>Active Task</h2>
      </div>
      <div className='bg-blue-600 flex item-start w-[45%] py-6 px-9 flex-col rounded-xl'>
        <h1 className='text-3xl font-medium '>{data.taskCount.newTask}</h1>
        <h2 className='text-xl font-medium'> New Task </h2>
      </div>
      <div className='bg-green-600 flex item-start w-[45%] py-6 px-9 flex-col rounded-xl'>
        <h1 className='text-3xl font-medium '>{data.taskCount.completed}</h1>
        <h2 className='text-xl font-medium'>Completed Task</h2>
      </div>
      <div className='bg-yellow-600 flex item-start w-[45%] py-6 px-9 flex-col rounded-xl'>
        <h1 className='text-3xl font-medium '>{data.taskCount.failed}</h1>
        <h2 className='text-xl font-medium'>Failed Task </h2>
      </div>
      
    </div>
  )
}

export default TaskCount

import React from 'react'
import AcceptTaks from '../TaskList/AcceptTaks'
import CompletedTask from '../TaskList/CompletedTask'
import NewTask from '../TaskList/NewTask'
import FaildTask from '../TaskList/FaildTask'

export default function AllTaskLists({data}) {
  return (
    <div id='AlltaskList' className='flex justify-start gap-4  h-[55%] py-5 mt-10 overflow-x-auto flex-nowrap mx-4 bg-black-200'>

      {data.tasks.map((ele, idx) => {
        
        if(ele.newTask){
          return <NewTask ele={ele} key={idx}  />
        }
        if(ele.completed){
          return <CompletedTask ele={ele} key={idx}  />
        }
        if(ele.failed){
          return <FaildTask ele={ele} key={idx}  />
        }
        if (ele.active) {
          return <AcceptTaks ele={ele} key={idx}  />
        }
      })}

     

    </div>
  )
}

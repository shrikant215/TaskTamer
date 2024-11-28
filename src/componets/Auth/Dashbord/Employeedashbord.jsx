import React from 'react'
import Header from '../../others/Header'
import TaskCount from '../../others/TaskCount'
import AllTaskLists from '../../others/AllTaskLists'

function Employeedashbord({data,changeUser}) {
  // console.log(data,"bbbbbbbbbb")
  return (
    <div className='p-4 bg-[#ICICIC] h-screen'>
      <Header changeUser={changeUser} data={data} />
      <TaskCount data={data} />
      <AllTaskLists data={data} />
    </div>
  )
}

export default Employeedashbord

import React from 'react'
import Header from '../../others/Header'
import TaskCount from '../../others/TaskCount'
import AllTaskLists from '../../others/AllTaskLists'
import Sidemenu from '../../others/Sidemenu'

function Employeedashbord({data,changeUser}) {
  // console.log(data,"bbbbbbbbbb")
  return (
    <div className=' h-screen flex'>
      {/* <Sidemenu /> */}
      <div className='w-full'>
      <Header changeUser={changeUser} data={data} />
      <TaskCount data={data} />
      <AllTaskLists data={data} />
      </div>
    </div>
  )
}

export default Employeedashbord

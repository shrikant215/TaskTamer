import React, { useContext } from 'react'
import Login from '../Login'
import Header from '../../others/Header'
import TaskAssign from '../../others/TaskAssign'
import TaskAdminList from '../../others/TaskAdminList'
import Sidemenu from '../../others/Sidemenu'

function AdminDashbord(props) {

  return (
    <div className=' flex'>
      {/* <Sidemenu /> */}
      <div className='w-full'>
        <Header changeUser={props.changeUser} data={props.data} />
        <TaskAssign />
        <TaskAdminList />
      </div>
     
    </div>
  )
}

export default AdminDashbord

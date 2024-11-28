import React, { useContext } from 'react'
import Login from '../Login'
import Header from '../../others/Header'
import TaskAssign from '../../others/TaskAssign'
import TaskAdminList from '../../others/TaskAdminList'

function AdminDashbord(props) {

  return (
    <div className='p-5'>
      <Header changeUser={props.changeUser} data={props.data} />
      <TaskAssign />
      <TaskAdminList />
    </div>
  )
}

export default AdminDashbord

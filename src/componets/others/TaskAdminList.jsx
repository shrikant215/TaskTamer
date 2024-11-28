import React, { useContext } from 'react'
import { getLocalStorage } from '../../utils/LocalStorage'
import { AuthContext } from '../../context/AuthProvider'

function TaskAdminList() {
  const authData = useContext(AuthContext);
  // console.log(authData.employee)
  
  
  return (
    <div id='TaskAdminList' className='flex flex-col h-40 w-[100%] px-10 gap-2 overflow-auto '>
      <div className='bg-blue-700 w-[100%] p-3 rounded flex justify-between font-medium flex-shrink-0'>
        <h1>EmployeeName</h1>
        <h1>Active Projects</h1>
        <h1>New task</h1>
        <h1>competed</h1>
        <h1>faild</h1>
        </div>
      {authData.employee.map((ele, idx) => (
        <div key={idx} className='bg-blue-700 w-[100%] p-3 rounded flex justify-between font-medium flex-shrink-0'>
        <h1>{ele.firstName}</h1>
        <h1>{ele.taskCount.active}</h1>
        <h1>{ele.taskCount.newTask}</h1>
        <h1>{ele.taskCount.completed}</h1>
        <h1>{ele.taskCount.failed}</h1>
        </div>
      ))}
     

    
    </div>
    

    
  )
}

export default TaskAdminList

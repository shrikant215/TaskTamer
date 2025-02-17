import React from 'react'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AddIcon from '@mui/icons-material/Add';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LogoutIcon from '@mui/icons-material/Logout';
import LightModeIcon from '@mui/icons-material/LightMode';
const Sidemenu = () => {
    const onClickLogout =() => {
        localStorage.setItem('loggedInUser',"");
        props.changeUser('')
      }
  return (
    <div className='flex flex-col w-64  gap-3 bg-[#1C1E27]'>
      <div className='flex items-center p-2 rounded text-2xl mt-5 font-bold text-purple-600 justify-center gap-2 cursor-pointer'> TaskTamer</div>
      <div className='flex items-center  p-2 rounded ml-3 gap-2 cursor-pointer'><DashboardIcon /> Dashbord</div>
      <div className='flex items-center  p-2 rounded  ml-3   gap-2 cursor-pointer'><PeopleAltIcon /> Employees</div>
      <div className='flex  items-center p-2 rounded  ml-3  gap-2 cursor-pointer'><AccountBoxIcon   /> Profile</div>
      <span className='h-[1px] bg-gray-950' />
      <div className='m-2 bg-slate-800 p-2 rounded text-sm flex gap-1 justify-center cursor-pointer'><AddIcon /> New Employee </div>
      <span className='h-[1px] bg-gray-950' />

      <div className='flex  p-2 rounded  ml-3  gap-2'> Settings</div>
      <div className='flex items-center p-2 rounded  ml-3  gap-2 cursor-pointer'><LightModeIcon   /> Light Mode</div>
      <div className='flex items-center p-2 rounded  ml-3  gap-2 cursor-pointer' onClick={onClickLogout}><LogoutIcon   /> Logout</div> 
    </div>
  )
}

export default Sidemenu

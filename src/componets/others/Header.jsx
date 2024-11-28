import React from 'react'

function Header(props) {

  const onClickLogout =() => {
    localStorage.setItem('loggedInUser',"");
    props.changeUser('')
  }
  return (
    <div className='flex justify-between items-end'>
      {props.data?.firstName ? (
      <h1 className='text-2xl' >Hello, <br /> <span className='text-3xl'>{props.data.firstName}</span> </h1>
      ) : (
      <h1 className='text-2xl' >Hello, <br /> <span className='text-3xl'>UserName</span> </h1>
      )}
      <button onClick={onClickLogout} className='bg-red-600 text-white px-5 py-2 text-lg font-medium rounded'>Log Out</button>
    </div>
  )
}

export default Header


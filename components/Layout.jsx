import React from 'react'
import Navbar from './Navbar'

const Layout = ({children, className=""}) => {
  return (
    <div className={` w-full min-h-[100vh]  bg-bg  dark:bg-bgDark  ${className}`}>
        <Navbar />
        {children}
    </div>
  )
}

export default Layout
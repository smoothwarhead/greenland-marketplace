import React from 'react'
import Sidebar from '../components/navigations/sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='layout'>
        <div className="sidebar">
            <Sidebar />
        </div>

        <div className="main-content">
            <Outlet />
        </div>

    </div>
  )
}

export default Layout
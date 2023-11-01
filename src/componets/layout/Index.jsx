import { Outlet } from 'react-router-dom'
import SideBar from '../SideBar/Index'
import'./Index.scss'
import React from 'react'



const Layout = () => {
  return (
    <div className='App'>

      <SideBar/>
      {/* <MobileNav/> */}
      
      <div className='page '>
        <span className='tags  fs-4 top-tags'>&lt;body&gt;</span>
        <Outlet/>

        <span className='tags fs-4 bottom-tags'>&lt;/body&gt;</span>
        <br />
        <span className=' fs-4 tags  bottom-tag-html'>&lt;/html&gt;</span>

      </div>
    </div>

    
  )
}

export default Layout
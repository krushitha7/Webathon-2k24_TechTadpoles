import React from 'react'
import NavBar from './NavBar/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'

function RootLayout() {
  return (
    < div className="">

      <NavBar/>
      <div style={{minHeight:'85vh'}}>
        <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default RootLayout
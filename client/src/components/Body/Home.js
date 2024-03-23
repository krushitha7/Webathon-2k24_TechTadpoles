import React from 'react'
import { Outlet } from 'react-router-dom'

function Home() {
  return (
    <div className='' style={{backgroundImage: `url(https://media.istockphoto.com/id/1052910764/photo/concept-body-mind-soul-spirit.jpg?s=612x612&w=0&k=20&c=0FGhVMI3XTeUlQVpd1TgcL2iqnCw4umSQKFnQiTj1dY=)`}}>
      <Outlet/>
    </div>
  )
}

export default Home
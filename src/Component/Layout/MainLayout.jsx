import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import Maincss from './MainLayout.module.css'

export default function MainLayout() {
  return (
    <div className={`${Maincss.mainlayout}`}>
      <Navbar />
      <div className={`${Maincss.content}`}>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar_part/Navbar'

const Root = () => {
  return (
    <>
    <Navbar/>
      <Outlet/>
    </>
  )
}

export default Root

import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Root from '../layout/root/Root'
import Home from '../pages/Home'

const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Root/>}>
        <Route path='/' element={<Home/>}></Route>
    </Route>
))

const Routes = () => {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default Routes

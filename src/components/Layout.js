import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './Nav'
// import AddPost from './AddPost'

const Layout = () => {
  return (

      <main className="App">
          <Nav />
    <Outlet />
  {/* <AddPost /> */}
      </main>
  )
}

export default Layout
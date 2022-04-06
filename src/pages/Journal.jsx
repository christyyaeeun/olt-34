import React from 'react'
// import Entry from '../components/Entry'
import AddPost from '../components/AddPost'
import CreatePost from '../components/CreatePost'

const Journal = () => {
  return (
    <div className="page-content">

      <CreatePost />
      <AddPost />
    </div>
  )
}

export default Journal
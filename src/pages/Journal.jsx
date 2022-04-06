import React from 'react'
// import Entry from '../components/Entry'
import AddPost from '../components/AddPost'
import CreatePost from '../components/CreatePost'
import OnPost from '../components/OnPost'

const Journal = () => {
  return (
    <div className="page-content">

      <CreatePost />
      <AddPost />
      <OnPost />
    </div>
  )
}

export default Journal
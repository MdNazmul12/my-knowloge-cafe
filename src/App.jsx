import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarkes from './Components/Bookmarkes/Bookmarkes'
import Header from './Components/Header/Header'

function App() {
const [bookmarks,setBookmarks]=useState([]); 
const [readingTime,setreadingTime]=useState(0)
const handleAddToBookmark= blog=>{
  const newBookmarks=[...bookmarks,blog];
  setBookmarks(newBookmarks)
}

const markAsReadTime= time=>{
  setreadingTime(readingTime+time)
}
  return (
    <>
      
      <Header></Header>
      <div className='flex max-w-7xl mx-auto'>
        <Blogs handleAddToBookmark={handleAddToBookmark} markAsReadTime={markAsReadTime}></Blogs>
        <Bookmarkes bookmarks={bookmarks} readingTime={readingTime}></Bookmarkes>

      </div>
   
    </>
  )
}

export default App

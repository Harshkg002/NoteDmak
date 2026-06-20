import React from 'react'
import { Routes, Route } from "react-router";
import HomePage from './Pages/HomePage'
import CreateNotePage from './Pages/CreateNotePage'
import DetailedNotePage from './Pages/DetailedNotePage'

const App = () => {
  return (
    <div className='relative h-full w-full'>
      <div className='absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#00FF9D40_100%)]'/>
      <Routes >
        <Route path="/" element={<HomePage/>}/>
        <Route path="/Note/:id" element={<DetailedNotePage/>}/>
        <Route path="/create" element={<CreateNotePage/>}/>
      </Routes>

    </div>
  )
}

export default App
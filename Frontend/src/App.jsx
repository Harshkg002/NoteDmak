import React from 'react'
import { Routes, Route } from "react-router";
import HomePage from './Pages/HomePage'
import CreateNotePage from './Pages/CreateNotePage'
import DetailedNotePage from './Pages/DetailedNotePage'

const App = () => {
  return (
    <div data-theme="forest">
      <Routes >
        <Route path="/" element={<HomePage/>}/>
        <Route path="/Note/:id" element={<DetailedNotePage/>}/>
        <Route path="/create" element={<CreateNotePage/>}/>
      </Routes>

    </div>
  )
}

export default App
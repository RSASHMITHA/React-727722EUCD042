import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Service from './pages/Service'


export default function App() {
  return (
    <div>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/services' element={<Service/>}></Route>
        </Routes>
    </BrowserRouter>
    </div>
  )
}

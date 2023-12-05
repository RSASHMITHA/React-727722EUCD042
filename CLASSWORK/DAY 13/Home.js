import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>Home
    return to : <Link to="/">Home</Link>, <Link to="/services">Service</Link>, <Link to="/contact">Contact</Link>, <Link to="/about">About</Link>
    </div>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    <div>Contact
    return to : <Link to="/">Home</Link>, <Link to="/services">Service</Link>, <Link to="/contact">Contact</Link>, <Link to="/about">About</Link>
    </div>
  )
}

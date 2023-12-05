import React from 'react'
import Class from './Class';
function ClickMe()
{
    alert('Welcome to SKCET');
}
export default function Button() {
  return (
    <button onClick={ClickMe()}>Click Me</button>
   
  )
}
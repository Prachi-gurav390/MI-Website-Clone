import React from 'react'
import '../styles/header.css'

const Header = ({text}) => {
  return (
    <div className="heading">
    <div></div> 
    <p>{text}</p>
    <div></div>
    </div>
  )
}

export default Header
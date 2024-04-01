import React from 'react'
import { Link } from "react-router-dom"
import "../styles/hotaccessoriesmenu.css"

const Hotaccessoriesmenu = () => {
  return (
    <div className="Hotaccessoriesmenu">
      <Link className="Hotaccessorieslink" to="/music">Music Store</Link>
      <Link className="Hotaccessorieslink" to="/smartdevices">Smart Devices</Link>
      <Link className="Hotaccessorieslink" to="/home">Home</Link>
      <Link className="Hotaccessorieslink" to="/lifestyle">Lifestyle</Link>
      <Link className="Hotaccessorieslink" to="/mobileaccessories">Mobile Accessories</Link>

    </div>
  )
}
export default Hotaccessoriesmenu
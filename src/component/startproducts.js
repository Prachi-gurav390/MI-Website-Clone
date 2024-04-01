import React from 'react'
import '../styles/starproducts.css'

const Startproducts = ({startproduct}) => {
  return (
    <div className="starProduct">
        <div>
            <a href={startproduct[0].url}> <img src={startproduct[0].image} alt="1st Product" /></a>
        </div>
        <div>
        <a href={startproduct[1].url}> <img src={startproduct[1].image} alt="1st Product" /></a>
         <a href={startproduct[2].url}> <img src={startproduct[2].image} alt="1st Product" /></a>
         <a href={startproduct[3].url}> <img src={startproduct[3].image} alt="1st Product" /></a>
        </div>
    </div>
  )
}

export default Startproducts
import React from 'react'
import "../styles/navcard.css"

const Navcard = ({image, name, price, index}) => {
    return (
        <div className="navcard" >
            <img src={image} alt={`${index} phone`} />
            <p>{name}</p>
            <span>{price}</span>
        </div>
    )
}

export default Navcard
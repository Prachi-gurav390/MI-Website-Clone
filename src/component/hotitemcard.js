import React from 'react'
import "../styles/hotitemcard.css"

const Hotitemcard = ({image, index, name, price}) => {
    return (
        <div className="hotitemcard">
            <img src={image} alt={`${index} product`} />
            <p>{name}</p>
            <span>{price}</span>
        </div>
    )
}

export default Hotitemcard
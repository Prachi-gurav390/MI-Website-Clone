import React from 'react'
import "../styles/productreviewscard.css"

const Productreviewscard = ({image, index, name, price, review}) => {
    return (
        <div className="Productreviewscard">
            <img src={image} alt={`${index} review`} />
            <h5>{review}</h5>
            <span>{name}</span>
            <b>{price}</b>
        </div>
    )
}

export default Productreviewscard
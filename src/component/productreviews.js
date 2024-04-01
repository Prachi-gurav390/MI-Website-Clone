import React from 'react'
import Productreviewscard from "./productreviewscard"
import "../styles/productreviews.css"

const Productreviews = ({ productreviews }) => {
    return (
        <div className="Productreviews">
            {productreviews.map((item, index) => (
                <Productreviewscard price={item.price} name={item.name} image={item.image} review={item.review} index={index} key={item.image} />
            ))}
        </div>
    )
}

export default Productreviews
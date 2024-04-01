import React from 'react'
import Videocard from './videocard'
import "../styles/videos.css"

const Videos = ({ videos }) => {
    return (
        <div className="Videos">
            {
                videos.map((item, index) => (
                    <Videocard index={index} key={item.image} image={item.image} name={item.name} />
                ))
            }
        </div>
    )
}

export default Videos
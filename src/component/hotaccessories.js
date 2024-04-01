import React from 'react'
import Hotitemcard from "./hotitemcard"
import "../styles/hotaccessories.css"

const Hotaccessories = ({music, musicCover, smartdevices, smartdevicesCover, home, homeCover, lifestyle, lifestyleCover, mobileaccessories, mobileaccessoriesCover}) => {
    return (
        <div className="hotaccessories">
            <div>
                <img src={musicCover || smartdevicesCover || homeCover || lifestyleCover || mobileaccessoriesCover} alt="Cover" />
            </div>
            {/* ---*/}
            <div>
                {
                    music && music.map((item, index)=>(
                        <Hotitemcard key={item.image} name={item.name} price={item.price} image={item.image} index ={index} />
                    ))
                }
                {
                    smartdevices && smartdevices.map((item, index)=>(
                        <Hotitemcard key={item.image} name={item.name} price={item.price} image={item.image} index ={index} />
                    ))
                }
                {
                    home && home.map((item, index)=>(
                        <Hotitemcard key={item.image} name={item.name} price={item.price} image={item.image} index ={index} />
                    ))
                }
                {
                    lifestyle && lifestyle.map((item, index)=>(
                        <Hotitemcard key={item.image} name={item.name} price={item.price} image={item.image} index ={index} />
                    ))
                }
                {
                    mobileaccessories && mobileaccessories.map((item, index)=>(
                        <Hotitemcard key={item.image} name={item.name} price={item.price} image={item.image} index ={index} />
                    ))
                }
                    <Hotitemcard image="https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg" />
            </div>
        </div>
    )
}

export default Hotaccessories
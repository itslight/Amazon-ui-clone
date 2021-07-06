import React from 'react';
import './Banner.css';


export default function Banner() {
   let func=()=>{
       return(
        <div className="banner-card">
            <img src="img/amazon_banner.jpg"/>
        </div>)
        }    
    return (
        <>
        {func()}
        {func()}
        {func()}
        </>
    )
}

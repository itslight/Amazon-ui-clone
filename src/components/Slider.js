import React from 'react';
import { Link } from 'react-router-dom';
import slide1 from '../slide1.jpg';
import slide2 from '../slide2.jpg';
import slide3 from '../slide3.jpg';
import slide4 from '../slide4.jpg';

export default function Slider() {
    return (
        
        <div id="carouselExampleControls" class="carousel slide" slide="false" data-bs-ride="carousel" style={{cursor:'pointer', position: "absolute"}}>
            <div class="carousel-inner min-vh-100">
                <Link class="carousel-item active" to="/Products">
                <img src={slide1} style={{objectFit:"cover"}} class="d-block w-100" alt="..."/>
                </Link>
                <Link class="carousel-item " to="/Products">
                <img src={slide2} style={{objectFit:"cover"}} class="d-block w-100" alt="..."/>
                </Link>
                <Link class="carousel-item" to="/Products">
                <img src={slide3} style={{objectFit:"cover"}} class="d-block w-100" alt="..."/>
                </Link>
                <Link class="carousel-item" to="/Products">
                <img src={slide4} style={{objectFit:"cover"}} class="d-block w-100" alt="..."/>
                </Link>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev" style={{height:"34.4vh"}}>
                <span class="carousel-control-prev-icon" aria-hidden="true" style={{width:"70px",height:60,marginTop:"0vh"}}></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next" style={{height:"34.4vh"}}>
                <span class="carousel-control-next-icon" aria-hidden="true" style={{width:"70px",height:60,marginTop:"0vh"}}></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>
        
    )
}

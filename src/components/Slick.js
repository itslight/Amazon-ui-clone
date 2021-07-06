import React, {Component} from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Slick.css';

export default class Slick extends Component {
  render() {
    const settings = {
      backgroundColor: "black",  
      className: "center",
      centerMode: false,
      infinite: false,
      centerPadding: "100px",
      slidesToShow: 5,
      speed: 500
    };
    return (
      <>
        <li className='cards__item2'>
        <text className="heading">Today’s Deals</text>
        <Slider {...settings}>
          <div className="images">
            <img src="img/prod1.jpg" className="prod"></img>
            <text>Rs99.00 - Rs2,999.00</text>
          </div>
          <div className="images">
          <img src="img/prod2.jpg" className="prod"></img>
          <text>Rs99.00 - Rs2,999.00</text>
          </div>
          <div className="images">
          <img src="img/prod3.jpg" className="prod"></img>
          <text>Rs99.00 - Rs2,999.00</text>
          </div>
          <div className="images">
          <img src="img/prod4.jpg" className="prod"></img>
          <text>Rs99.00 - Rs2,999.00</text>
          </div>
          <div className="images">
          <img src="img/prod5.jpg" className="prod"></img>
          <text>Rs99.00 - Rs2,999.00</text>
          </div>
          <div className="images">
          <img src="img/prod6.jpg" className="prod"></img>
          <text>Rs99.00 - Rs2,999.00</text>
          </div>
          <div className="images">
          <img src="img/prod7.jpg" className="prod"></img>
          <text>Rs99.00 - Rs2,999.00</text>
          </div>
          <div className="images">
          <img src="img/prod8.jpg" className="prod"></img>
          <text>Rs99.00 - Rs2,999.00</text>
          </div>
          <div className="images">
          <img src="img/prod9.jpg" className="prod"></img>
          <text>Rs99.00 - Rs2,999.00</text>
          </div>
          <div className="images">
          <img src="img/prod10.jpg" className="prod"></img>
          <text>Rs99.00 - Rs2,999.00</text>
          </div>
        </Slider>
        </li>
      </>
    );
  }
}
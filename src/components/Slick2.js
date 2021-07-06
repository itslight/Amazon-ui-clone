import React, {Component} from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Slick2.css';

export default class Slick2 extends Component {
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
        <li className='cards__item3'>
        <text className="heading2">Everyday essentials that you might like</text>
        <Slider {...settings}>
          <div className="images2">
            <img src="img/prod11.jpg" className="prod2"></img>
            <text>Rs99.00 - Rs2,999.00</text>
          </div>
          <div className="images2">
          <img src="img/prod12.jpg" className="prod2"></img>
          <text>Rs99.00 - Rs2,999.00</text>
          </div>
          <div className="images2">
          <img src="img/prod13.jpg" className="prod2"></img>
          <text>Rs99.00 - Rs2,999.00</text>
          </div>
          <div className="images2">
          <img src="img/prod14.jpg" className="prod2"></img>
          <text>Rs99.00 - Rs2,999.00</text>
          </div>
          <div className="images2">
          <img src="img/prod15.jpg" className="prod2"></img>
          <text>Rs99.00 - Rs2,999.00</text>
          </div>
          <div className="images2">
          <img src="img/prod16.jpg" className="prod2"></img>
          <text>Rs99.00 - Rs2,999.00</text>
          </div>
          <div className="images2">
          <img src="img/prod17.jpg" className="prod2"></img>
          <text>Rs99.00 - Rs2,999.00</text>
          </div>
          <div className="images2">
          <img src="img/prod18.jpg" className="prod2"></img>
          <text>Rs99.00 - Rs2,999.00</text>
          </div>
          <div className="images2">
          <img src="img/prod19.jpg" className="prod2"></img>
          <text>Rs99.00 - Rs2,999.00</text>
          </div>
          <div className="images2">
          <img src="img/prod20.jpg" className="prod2"></img>
          <text>Rs99.00 - Rs2,999.00</text>
          </div>
        </Slider>
        </li>
      </>
    );
  }
}
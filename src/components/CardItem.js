import React from 'react';
import { Link } from 'react-router-dom';
// import prod from './prod1';

function CardItem(props) {
  // this section is for defining cards formats
  return (
    <>
      <li className='cards__item'>
        {/* <div className='cards__item__link' to={props.path}> */}
        <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
          <figure className='cards__item__pic-wrap'>
            <Link to="/Products">
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            />
            </Link>
          </figure>
          <a className="see-more">see more</a>
        {/* </Link> */}
      </li>
    </>
  );
}

export default CardItem;
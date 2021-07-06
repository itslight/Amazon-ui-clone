import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Section_card from './Section_card';

function Cards() {
  // defining different cards here
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem className="card-item"
              src='img/card1.jpg'
              text='Up to 70% off | Electronics clearance store'
              label='Adventure'
              path='/services'
            />
            <CardItem className="card-item"
              src='img/card2.jpg'
              text='Pay your credit card bills on Amazon'
              label='Luxury'
              path='/services'
            />
            <CardItem className="card-item"
              src='img/card3.jpg'
              text='Pay your credit card bills on Amazon'
              label='Mystery'
              path='/services'
            />
            <Section_card/>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
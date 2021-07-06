import React from 'react';
import './Section_card.css';

export default function Section_card() {
    return (
        <>
          <li className='s_cards__item'>
            <text className="sec-head">Up to 60% off | Decorate with home essentials</text>
            {/* <div className='cards__item__link' to={props.path}> */}
            <li className="col1">
            <li className='s1_cards__item'>
              <figure className='s_cards__item__pic-wrap'>
                  
                <img
                  className='s_cards__item__img'
                  alt='Travel Image'
                  src="img/card11.jpg"
                />
              </figure>

              <div className='s_cards__item__info'>
                <h5 className='s_cards__item__text'>Bed Sheet</h5>
              </div>
              
            {/* </Link> */}
            </li>
           
            <li className='s1_cards__item'>
              <figure className='s_cards__item__pic-wrap'>                  
                <img
                  className='s_cards__item__img'
                  alt='Travel Image'
                  src="img/card12.jpg"
                />
              </figure>
              <div className='s_cards__item__info'>
                <h5 className='s_cards__item__text'>Cloth Almera</h5>
              </div>
            {/* </Link> */}
            </li>
            </li>
            <li className="col2">
            <li className='s1_cards__item'>
            
              <figure className='s_cards__item__pic-wrap'>
                  
                <img
                  className='s_cards__item__img'
                  alt='Travel Image'
                  src="img/card13.jpg"
                />
              </figure>

              <div className='s_cards__item__info'>
                <h5 className='s_cards__item__text'>Wallpaper</h5>
              </div>

            {/* </Link> */}
            </li>
            <li className='s1_cards__item'>
              <figure className='s_cards__item__pic-wrap'>
                  
                <img
                  className='s_cards__item__img'
                  alt='Travel Image'
                  src="img/card14.jpg"
                />
              </figure>

              <div className='s_cards__item__info'>
                <h5 className='s_cards__item__text'>Home decoration</h5>
              </div>
             
            {/* </Link> */}
            </li>
            </li>
            <a className="sec-see">see more</a>
          </li>
        </>
      );
    }
    

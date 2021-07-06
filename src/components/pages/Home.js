import React, { useState } from 'react';
import Fix_Header from '../Fix_Header';
import Ribbon from '../Ribbon';
import Slider from '../Slider';
import Cards from '../Cards';
import Slick from '../Slick';
import Slick2 from '../Slick2';
import Banner from '../Banner';
import Footer from '../Footer';
import All_scroll from '../All_scroll';
import '../../App.css';

function Home() {
  const [all, setAll] = useState(false);


  function scroll_show(event){
    setAll(!all);
  }
  return (
    <div className="container">
      
      <Fix_Header/>
      <Ribbon scroll_show={scroll_show}/>
      <Slider/>
      <Cards/>
      <All_scroll scroll_show={scroll_show} all={all}/>
      <Slick/>
      <Slick2/>
      <Banner/>
      <Footer/>
      
    </div>
  );
}

export default Home;
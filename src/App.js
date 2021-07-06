// import Fix_Header from './components/Fix_Header';
// import Ribbon from './components/Ribbon';
// import Slider from './components/Slider';
// import Cards from './components/Cards';
// import Slick from './components/Slick';
// import Slick2 from './components/Slick2';
// import Banner from './components/Banner';
// // import Section_card from './components/Section_card';
// import Footer from './components/Footer';
// import './App.css';

// function App() {
  
//   return (
//     <div className="container">
  
//       <Fix_Header/>
//       <Ribbon/>
//       <Slider/>
//       <Cards/>
//       <Slick/>
//       <Slick2/>
//       <Banner/>
//       {/* <Section_card/> */}
//       <Footer/>
//     </div>
//   );
// }


import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Help from './components/pages/Help';
import Products from './components/pages/Products';
import About from './components/pages/About';
import Connect from './components/pages/Connect';
import Money from './components/pages/Money';
// import Fix_Header from './components/Fix_Header';
// import Footer from './components/Footer';
// import Ribbon from './components/Ribbon';

function App() {
  return (
    <div className="App">
      
      
      <Router>
        <Switch> 
    {/* defining path for different components  */}
          <Route path="/" exact component={Home}/>
          <Route path='/Help' component={Help} />
          <Route path='/Products' component={Products} />
          <Route path='/About' component={About} />
          <Route path='/Money' component={Money} />
          <Route path='/Connect' component={Connect} />
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;


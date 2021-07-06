import React, { useState } from 'react';
import './Ribbon.css';
import Dialog from './Dialog';
import Prime_dialog from './Prime_dialog';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import All_scroll from './All_scroll';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width:"100vw",
  },
  tool_bar:{
    marginTop: 58,
    background: "rgb(48, 46, 46)",
    minHeight: "5vh",
  },
  menu:{
    border: "1px solid rgb(48, 46, 46)", 
    width:60, 
    height:25, 
    borderRadius: 3, 
    paddingLeft:10,
    marginLeft:-5,
    marginTop: -7, 
    cursor: "pointer",
  }
}));

export default function Ribbon({scroll_show}) {
  
  const [isOpen, setIsOpen] = useState(false);
  const [prime, setPrime] = useState(false);
  const [p, setP] = useState(false);
  const classes = useStyles();

  function MouseHover(event){
    if(event.target.nodeName==="DIV"){
    event.target.style.border="1px solid white";
    }
  }  
  function Mouseout(event){
    if(event.target.nodeName==="DIV"){
    event.target.style.border="1px solid rgb(48, 46, 46)";}
  } 
  function Hover(event){
    setPrime(true);
    setP(true);
  }
  function Hoverout(event){
    setPrime(false);
    // setP(false);
  }
  
  
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.tool_bar}>
        <div className={classes.menu} onMouseOver={MouseHover} onMouseOut={Mouseout} onClick={()=>scroll_show()}>    
         <MenuIcon style={{marginLeft:-10, fontSize: 25}}/>
         <text style={{marginLeft: 3, position: "absolute",marginTop:2.9, fontSize:14,fontWeight:500}} >All</text>
         </div>

         <button style={{marginLeft:5}} onClick={(e) => setIsOpen(true)} className="Ribbon-btn">
           Best Sellers
         </button>
         <button onClick={(e) => setIsOpen(true)} className="Ribbon-btn">
           Mobiles
         </button>
         <button style={{paddingRight:20}} onMouseOver={Hover} onMouseOut={Hoverout} className="Ribbon-btn">
           Prime
           <ArrowDropDownIcon style={{position: "absolute",marginTop:-2, fontSize:19, color:"rgb(204, 201, 201)"}}/>
         </button>
         <button onClick={(e) => setIsOpen(true)} className="Ribbon-btn">
           Fashion
         </button>
         <button onClick={(e) => setIsOpen(true)} className="Ribbon-btn">
           Electronics
         </button>
         <button onClick={(e) => setIsOpen(true)} className="Ribbon-btn">
           New Releases
         </button>
         <button onClick={(e) => setIsOpen(true)} className="Ribbon-btn">
           Amazon Pay
         </button >
         <button onClick={(e) => setIsOpen(true)} className="Ribbon-btn">
           Today's Deals
         </button>
         <Dialog isOpen={isOpen} onClose={(e) => setIsOpen(false)}>
          Clicked
        </Dialog>
        <Prime_dialog isOpen={prime} Hover={Hover} Hoverout={Hoverout} />
        </Toolbar>
      </AppBar>
    </div>
  );
}
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import logo from './amazon_logo.png';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import SearchIcon from '@material-ui/icons/Search';
import './Fix_Heading.css';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    minHeight: 32,
    width:"100vw",
    background: "#000000",
    paddingTop: 4,
    paddingBottom: 4,
  },
  in: {
    color: "#fff",
    textTransform: 'lowercase',
    position: "absolute",
    marginTop: 5,
  },
  dropText: {
    fontSize: 12.4,
    position: "fixed",
    marginLeft: -18,
    marginTop:4.7,
  }

  
}));

export default function Fix_Header() {
  const classes = useStyles();

  return (
    <div id="fh" className={classes.root}>
      <AppBar>
        <Toolbar className={classes.toolbar}>
        <button  className="logo-btn"><img src={logo} className="img" /><text className={classes.in}>.in</text></button>
       <div>
       <button className="location">
         <LocationOnOutlinedIcon style={{ fontSize: 20 }} className="loc"/>
         <text style={{position:"absolute",fontSize:12,marginTop:-5}}>Hello</text>
         <div style={{position:"absolute",fontSize:14, marginLeft:20,marginTop:-13,fontWeight:500}}>Select your address</div>
       </button>
       <span className="full-search-bar">
          <button className="search-drop"><text className={classes.dropText}>All</text><ArrowDropDownIcon fontSize="small"/></button>
          <input type="text" className="search-bar"/>
          <button className="search-btn"><SearchIcon style={{ fontSize: 31 }} /></button>
        </span>
        <button className="cart"><ShoppingCartOutlinedIcon style={{ fontSize: 40 }}/><text style={{position:"absolute",marginTop:20 }}>Cart</text></button>
        </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
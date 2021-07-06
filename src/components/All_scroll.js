import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import './All_scroll.css';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      position: "absolute",
    },
}));


export default function All_scroll({scroll_show, all}) {
    const classes = useStyles();
    // var k= all;
    // const [show, setShow] = useState(true);
    // setShow(all);
    
    if (all == true){
    return (
        
        <div id="arp" className="scroll_block">
            <div className={classes.root}>
            <AppBar className="scroll-bar">
                <Toolbar>
                    <text className="bar-text">
                Hello, Sign in
                    </text>
                <button onClick={()=>{scroll_show() }} className="scroll_close">Close </button>
                </Toolbar>
            </AppBar>
            </div>
        
            <a href="#" className="head-scroll_item"><text>Trending</text></a>
            <a href="#" className="scroll_item"><text>Best Seller</text></a>
            <a href="#" className="scroll_item"><text>New Release</text></a>
            <a href="#" className="scroll_item"><text>Movers and Shakers</text></a>
            <div className="hor-line"></div>
            <a href="#" className="head-scroll_item"><text>Digital Content And Devices</text></a>
            <a href="#" className="scroll_item"><text>Excho and Alexa</text></a>
            <a href="#" className="scroll_item"><text>Fire TV</text></a>
            <a href="#" className="scroll_item"><text>Kindle E-Readers</text></a>
            <a href="#" className="scroll_item"><text>Audible Audiobooks</text></a>
            <a href="#" className="scroll_item"><text>Amazon Prime Video</text></a>
            <a href="#" className="scroll_item"><text>Amazon Prime Music</text></a>
            <div className="hor-line"></div>
            <a href="#" className="head-scroll_item"><text>Shop By Department</text></a>
            <a href="#" className="scroll_item"><text>Mobiles, Computers</text></a>
            <a href="#" className="scroll_item"><text>TV, Appliances, Electronics</text></a>
            <a href="#" className="scroll_item"><text>Men's Fashion</text></a>
            <a href="#" className="scroll_item"><text>Women's Fashion</text></a>
            <a href="#" className="scroll_item"><text>See All</text></a>
            <div className="hor-line"></div>
            <a href="#" className="head-scroll_item"><text>Program & Features</text></a>
            <a href="#" className="scroll_item"><text>Gift Cards Recharges</text></a>
            <a href="#" className="scroll_item"><text>Flight Tickets</text></a>
            <a href="#" className="scroll_item"><text>Full Store Directory</text></a>
            <div className="hor-line"></div>
            <a href="#" className="head-scroll_item"><text>Help & Settings</text></a>
            <a href="#" className="scroll_item"><text>Your Account</text></a>
            <a href="#" className="scroll_item"><text>Customer Service</text></a>
            <a href="#" className="scroll_item"><text>Sign In</text></a>
        </div>

    )}
    // else if(k==true && show== false){
        // k= false;
        // setShow(true);
        // return(<div></div>)
    // }
    else{
        // k=false;
        // setShow(true);
        return(<div></div>)
    }
}



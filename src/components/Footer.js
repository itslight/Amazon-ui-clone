import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import LanguageIcon from '@material-ui/icons/Language';
import { Link } from 'react-router-dom';
import './Footer.css';

const useStyles = makeStyles((theme) => ({
    root: {
      width:"1440px",
    },
    footer1:{
        cursor: "pointer",
        background: "rgb(70, 64, 64);",
        minHeight: "48px",
    },
    foot_text:{
        fontSize: 13,
        marginLeft: "45vw",
    },
    footer2:{
        background: "rgb(48, 46, 46)",
        display: "flex",
        flexDirection:"row",
        height:300,
    },
    footer3:{
        background: "rgb(31, 29, 29)",
        height: 200,
    }
  }));

  function topFunction() {
    document.documentElement.scrollTop = 0;
  }

  export default function Footer() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
        <AppBar position="relative">
            <Toolbar className={classes.footer1} onClick={topFunction}>
            <text className={classes.foot_text}>Back to top</text>
            </Toolbar>
        </AppBar>
        <AppBar position="relative">
            <Toolbar className={classes.footer2}>
            <div className="container2">
                <Link className="foot2-col" to='/About'>
                    <text className="foot2-heading">Get to Know Us</text>
                    <text>About Us</text>
                    <text>Careers</text>
                    <text>Press Releases</text>
                    <text>Amazon Cares</text>
                </Link>
                <Link className="foot2-col" to='/Connect'>
                    <text className="foot2-heading">Connect with Us</text>
                    <text>Facebook</text>
                    <text>Twitter</text>
                    <text>Instagram</text>
                </Link>
                <Link className="foot2-col" to='/Money'>
                    <text className="foot2-heading">Make Money with Us</text>
                    <text>Sell on Amazon</text>
                    <text>Sell under Amazon Accelerator</text>
                    <text>Amazon Global Selling</text>
                    <text>Become an Affiliate</text>
                    <text>Fulfilment by Amazon</text>
                    <text>Advertise Your Product</text>
                </Link>
                <Link className="foot2-col" to='/Help'>
                    <text className="foot2-heading">Let Us Help You</text>
                    <text>COVID-19 and Amazon</text>
                    <text>Your Account</text>
                    <text>Return Center</text>
                    <text>100% Purchase Protection</text>
                    <text>Amazon App Download</text>
                    <text>Amazon Assistance Download</text>
                </Link>
            </div>
            </Toolbar>
        </AppBar>
        <AppBar position="relative">
            <Toolbar id="f3" className={classes.footer3}>
                <div className="container3">
                    <div className="f-btn">
                        <button className="footer-button"><LanguageIcon style={{fontSize:18}}/><text style={{fontSize:14, paddingLeft:10,paddingRight:10}}>English</text></button>
                    </div>
                    <div className="foot3-text">
                    <text>Australia</text>
                    <text>Brazil</text>
                    <text>Canada</text>
                    <text>China</text>
                    <text>France</text>
                    <text>Germany</text>
                    <text>Italy</text>
                    <text>Japan</text>
                    <text>Mexico</text>
                    <text>Netherlands</text>
                    <text>Poland</text>
                    <text>Singapore</text>
                    <text>Spain</text>
                    <text>Turkey</text>
                    <text>United Arab Emirates</text>
                    <text>United Kingdom</text>
                    <text>United States</text>
                </div>
            </div>
            </Toolbar>
        </AppBar>
        </div>
    );
}
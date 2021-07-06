import React, { Component } from 'react';

let primeStyles = {
    width: '400px',
    marginTop: '218px',
    height: "400px",
    position: 'absolute',
    left: '30%',
    top: '38%',
    transform: 'translate(-50%,-50%)',
    zIndex: '9',
    backgroundColor: 'white',
    padding: '10px 20px 40px',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column'
};

let arrow_up = {
    width: 0, 
    height: 0, 
    zIndex: '9',
    marginLeft: -475,
    marginTop: 9.7,
    position:"absolute",
    borderLeft: "5px solid transparent",
    borderRight: "5px solid transparent",
    borderBottom: "5px solid white",
  };



class Prime_dialog extends Component {
    state = {
        p: false,
      };

    hover=(event)=>{
        this.setState(
           {p: true}
          )
    }

    hovout=(event)=>{
        this.setState(
            {p: false}
           )
    }
    render() {
    

        let dialog = (
            <div onMouseOver={this.hover} onMouseOut={this.hovout} >
            {/*  <div> */}
            <div style={arrow_up}></div>
            <div style={primeStyles}>
                <img src="img/prime_img.jpg"></img>
            </div>
            </div>
        );
        
        return (
            <div>
                {(this.props.isOpen || this.state.p ) && dialog}
            </div>
        );
    }
}

export default Prime_dialog;
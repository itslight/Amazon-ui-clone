import React, { Component } from 'react';

let dialogStyles = {
    width: '500px',
    margin: '0 auto',
    position: 'fixed',
    left: '50%',
    top: '20%',
    transform: 'translate(-50%,-50%)',
    zIndex: '9',
    backgroundColor: 'white',
    padding: '10px 20px 40px',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column'
};

let dialogCloseButtonStyles = {
    marginBottom: '15px',
    padding: '3px 8px',
    cursor: 'pointer',
    borderRadius: '50%',
    border: 'none',
    width: '30px',
    height: '30px',
    fontWeight: 'bold',
    alignSelf: 'flex-end'
};


class Dialog extends Component {
    render() {
        let dialog = (
            <div style={dialogStyles}>
                <button style={dialogCloseButtonStyles} onClick={this.props.onClose}>x</button>

                <div style={{color:"black"}}>{this.props.children}</div>
            </div>
        );

        if (! this.props.isOpen) {
            dialog = null;
        }
        return (
            <div>
                {dialog}
            </div>
        );
    }
}

export default Dialog;
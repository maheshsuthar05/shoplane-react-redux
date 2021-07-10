import React, { Component } from 'react';
import './footer.css'

const Footer = () => {
    return ( 
    <div className='footer'>
        <div className="footer-menu">
            <p className="footer-menu-heading">online store</p>
            <p className="footer-menu-item">men clothing</p>
            <p className="footer-menu-item">women clothing</p>
            <p className="footer-menu-item">men accessories</p>
            <p className="footer-menu-item">women accessories</p>
        </div>
        <div className="footer-menu">
            <p className="footer-menu-heading">helpful links</p>
            <p className="footer-menu-item">home</p>
            <p className="footer-menu-item">about</p>
            <p className="footer-menu-item">contact</p>
        </div>
        <div className="footer-menu">
            <p className="footer-menu-heading">partners</p>
            <p className="footer-menu-item">zara</p>
            <p className="footer-menu-item">pantaloons</p>
            <p className="footer-menu-item">levis</p>
            <p className="footer-menu-item">ucb</p>
            <p className="footer-menu-item">+ many more</p>
        </div>
        <div className="footer-menu">
            <p className="footer-menu-heading">address</p>
            <p className="footer-menu-item">building 101</p>
            <p className="footer-menu-item">central avenue</p>
            <p className="footer-menu-item">la - 902722</p>
            <p className="footer-menu-item">united states</p>
        </div>
    </div> );
}
 
export default Footer;
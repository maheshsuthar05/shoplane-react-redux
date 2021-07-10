import React, { Component } from 'react';
import './confirmation.css';
import Topbar from './topbar';
import Footer from './footer';
import { connect } from 'react-redux';
import { addToCart } from '../actions';

class Confirmation extends Component {
    constructor(props) {
        super(props);
        this.props.addCart([])
        this.state = {
        }
    }

    componentDidMount() {
        window.localStorage.removeItem('cartItems')
    }

    render() {
        return (<>
            <Topbar />
            <div className="confirmation-container">
                <div className="tick-container">
                    <img src="https://test-hosting-8f9bf.web.app/assets/white-tick.png" className="tick-mark" />
                </div>
                <h1 className="confirmation-heading">Order Placed Successfully!!</h1>
                <p className="confirmation-description">We have sent you an email with the order details</p>
            </div>
            <Footer />
        </>);
    }
}

const mapDispatchToProps = (dispatch) => ({
    addCart: (payload) => dispatch(addToCart(payload))
});

export default connect(null, mapDispatchToProps)(Confirmation);
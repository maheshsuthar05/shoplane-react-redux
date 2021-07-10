import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions';
import NumberFormat from 'react-number-format';
import { Link } from 'react-router-dom';

import Topbar from './topbar';
import Footer from './footer';
import './checkout.css'


class Checkout extends Component {
    constructor(props) {
        super(props);

        let totalAmount = 0;
        this.props.cartItems.map(item => {
            totalAmount += (item.count * item.price)
        })

        this.state = {
            filteredCart: [],
            totalAmount
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    handleDelete(indexAt) {
        const filterCart = this.props.cartItems.filter((item,index) => index !== indexAt)
        this.props.addCart(filterCart)
        let amount = 0;
        filterCart.map(item => {
            amount += (item.count * item.price)
        })
        this.setState({filteredCart: filterCart, totalAmount: amount})
    }

    render() {
        return (<div style={{ marginTop: '100px' }}>
            <Topbar />
            <div class="checkout-container">
                <h3 class="checkout-heading">Checkout</h3>
                <p class="total-items">Total Items: {this.props.cartItems.length}</p>
                <section class="checkout-wrapper">
                    <div class="cart-item-wrapper">
                        {this.props.cartItems.map((item,index) => {
                            return (
                                <div class="cart-product-card">
                                    <div class="card-details">
                                        <img src={item.preview} class="cart-card-thumbnail" />
                                        <div class="cart-card-details">
                                            <h3 class="cart-card-name">{item.name}</h3>
                                            <p class="cart-card-count">Quantity - {item.count}</p>
                                            <p class="cart-card-amount"><span style={{ fontWeight: 'bold' }}>Total Amount:</span>
                                                <NumberFormat value={item.price * item.count} displayType={'text'} thousandSeparator={true} prefix={' ₹ '} /></p>
                                        </div>
                                    </div>
                                    <i class="fas fa-trash" aria-hidden="true" onClick={() => this.handleDelete(index)}></i>
                                </div>
                            )
                        })}
                    </div>
                    <div class="final-price-wrapper">
                        <h3 class="total-amount-title">Total Amount</h3>
                        <p class="final-amount-title">Amount: Rs <span class="final-amount-price">
                            <NumberFormat value={this.state.totalAmount} displayType={'text'} thousandSeparator={true} prefix={' ₹ '} /></span>
                        </p>
                        <Link to='/confirmation'><button class="place-order">Place Order</button></Link>
                    </div>
                </section>
            </div>
            <Footer />
        </div >);
    }
}

const mapStateToProps = (store) => ({
    cartItems: store.cartItems
})

const mapDispatchToProps = (dispatch) => ({
    addCart: (payload) => dispatch(addToCart(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'
import { addProduct } from '../actions'
import './home.css'
import ImageSlider from './imageSlider'
import Product from './product';
import { Link } from 'react-router-dom';
import Topbar from './topbar';
import Footer from './footer';
import spinner from './Images/spinner.gif';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }

    componentDidMount = () => {
        axios.get('https://5d76bf96515d1a0014085cf9.mockapi.io/product/')
            .then(resp => {
                this.props.sendProducts(resp.data)
                this.setState({ loading: false })
            })
        window.scrollTo(0, 0)
    }

    handleClick = () => {
        <Product />
    }

    render() {
        return (<> 
            <Topbar />
            {this.state.loading ? <img className='spinner' src={spinner} /> :
                <div style={{ marginTop: '100px' }}>
                <ImageSlider />
                <div className="grid-section">
                    <h2 className="section-title">Clothing for Men and Women</h2>
                    <div className="grid-container">
                        {
                            this.props.products.slice(0, 5).map((item, index) => (
                                <Link key={index + 1} className='product-card' onClick={this.handleClick} to={`/product/${item.id}`} style={{ textDecoration: 'none' }}>
                                    <img src={item.preview} className="card-thumbnail" />
                                    <div className='product-card-container'>
                                        <h3 className='description'>{item.name}</h3>
                                        <h4 className='brand'>{item.brand}</h4>
                                        <h5 className='price'>Rs {item.price}</h5>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </div>

                <div className="grid-section">
                    <h2 className="section-title">Accessories for Men and Women</h2>
                    <div className="grid-container">
                        {
                            this.props.products.slice(5, 10).map((item, index) => (
                                <Link key={index + 1} className='product-card' onClick={this.handleClick} to={`/product/${item.id}`} style={{ textDecoration: 'none' }}>
                                    <img src={item.preview} className="card-thumbnail" />
                                    <div className='product-card-container'>
                                        <h3 className='description'>{item.name}</h3>
                                        <h4 className='brand'>{item.brand}</h4>
                                        <h5 className='price'>Rs {item.price}</h5>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>}
    <Footer />
    </>);
    }
}


const mapStateToProps = (store) => ({
    products: store.product
})

const mapDispatchToProps = (dispatch) => ({
    sendProducts: (payload) => dispatch(addProduct(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
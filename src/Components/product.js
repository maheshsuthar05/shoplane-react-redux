import React, { useEffect, Component, useState } from 'react';
import { useParams } from 'react-router';
import { connect } from 'react-redux';
import './product.css';
import axios from 'axios';
import { addToCart } from '../actions';
import Topbar from './topbar';
import Footer from './footer';
import spinner from './Images/spinner.gif';

const Product = ({ cartItems, addCart }) => {

  const { productId } = useParams();
  const [active, setActive] = useState(0);
  const [viewedProduct, setViewedProduct] = useState('')
  const [loading, setLoading] = useState(true)
  const [previewImage, setPreviewImage] = useState(null)
  let [sample, setSample] = useState(0)

  useEffect(() => {
    axios.get(`https://5d76bf96515d1a0014085cf9.mockapi.io/product/${productId}`)
      .then(resp => {
        setViewedProduct(resp.data)
        setPreviewImage(resp.data.preview)
        setLoading(false)
      })
    window.scrollTo(0, 0)
  }, [])

  const handleAddToCart = () => {
    const index = cartItems.findIndex(cart => cart.id === viewedProduct.id)

    if(index > -1){
      cartItems[index].count += 1;
    }else{
      viewedProduct.count = 1;
      cartItems.push(viewedProduct);
    }

    addCart(cartItems)
    setSample(++sample)
  }

  return (<> 
  <Topbar count={sample}/>
    <div className="main-product-container">
      {loading ? <img className='spinnerP' src={spinner} /> :
        <>
          <div className="product-thumbnail">
            <img className="product-main-image" src={previewImage} />
          </div>
          <div className="product-details">
            <h1 className="product-title">{viewedProduct.name}</h1>
            <p className="brand">{viewedProduct.brand}</p>
            <div className="price-details">
              <span className="price">Price: Rs </span>
              <span className="price-figure">{viewedProduct.price}</span>
            </div>
            <h3 className="description-title">Description</h3>
            <p className="description">{viewedProduct.description}</p>
            <h3 className="product-preview-title">Product Preview</h3>
            <div className="product-preview">
              {viewedProduct.photos.map((item, index) => {
                return (
                  <img src={item} className={active === index ? 'product-preview-image active' : 'product-preview-image'}
                    onClick={() => {
                      setActive(index)
                      setPreviewImage(item)
                    }} />
                )
              })}
            </div>
            <button className="atc-button" onClick={() => handleAddToCart()}>Add to Cart</button>
          </div>
        </>}
    </div>
    <Footer />
    </>);
}

const mapStateToProps = (store) => ({
  cartItems: store.cartItems
})

const mapDispatchToProps = (dispatch) => ({
  addCart: (payload) => dispatch(addToCart(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);

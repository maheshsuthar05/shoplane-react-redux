import 'font-awesome/css/font-awesome.min.css';
import './topbar.css'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Profile from './Images/profile.jpg';

const Topbar = ({cartItems}) => {
    return (
        <div className="topbar">
            <div className="hamburger-menu">
                <i className="fa fa-bars" aria-hidden="true"></i>
            </div>

            <div className="topbar-menu">
                <Link className="brand-logo" href="" to='/'><span>SHOP</span>LANE</Link>
                <a className="topbar-menu-item" href="#clothing-grid">clothing</a>
                <a className="topbar-menu-item" href="#accessories-grid">accessories</a>
            </div>

            <div className="topbar-search">
                <i className="fa fa-search" aria-hidden="true"></i>
                <input type="text" name="search" placeholder="Search for Clothing and Accessories" />
            </div>

            <div className="topbar-profile">
                <Link className="cart-wrapper" to='/checkout'>
                    <p className="cart-counter">{cartItems.length}</p>
                    <a href=""><i className="fa fa-shopping-cart" aria-hidden="true"></i></a>
                </Link>
                <img className="topbar-social" src={Profile} />
            </div>
        </div>
    );
}

const mapStateToProps = (store) => ({
    // products: store.product
    cartItems: store.cartItems
})

const mapDispatchToProps = (dispatch) => ({
    //sendProducts: (payload) => dispatch(addProduct(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Topbar);
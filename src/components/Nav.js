import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import { BsFillBagFill} from "react-icons/bs";
const Nav = () => {
    const { totalQuantity } = useSelector(state => state.CartReducer)
    return (
        <div className="nav">
            <div className="container">
        <div className="nav__conatiner">
        <div className="nav__left">
        <Link to='/'>
        <img src="/images/logo.webp" alt="logo"></img>
        </Link>
        </div>
        <div className="nav__right"><Link to="/cart">
        <div className="basket"><BsFillBagFill className="cart-icon"/>
        <span>{totalQuantity}</span>
        </div>
        </Link></div>
        </div>
        </div>

        </div>
    )
}

export default Nav

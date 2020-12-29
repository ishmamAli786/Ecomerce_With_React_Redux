import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import currencyFormatter from 'currency-formatter';
import { BsPlus, BsDash, BsBackspaceReverse } from "react-icons/bs";
const Cart = () => {
    const { products, totalQuantity, totalPrice} = useSelector(state => state.CartReducer);
    const dispatch=useDispatch();
    return (
        <div className="cart">
        <div className="container">
        <h3>Your Cart</h3>
        {products.length > 0? <>
        <div className="row">
        <div className="col-9">
        <div className="cart__heading">
        <div className="row">
        <div className="col-2">Picture</div>
        <div className="col-2">Name</div>
        <div className="col-2">Price</div>
        <div className="col-2">Inc/Dec</div>
        <div className="col-2">Total Price</div>
        <div className="col-2">Remove</div>

        </div>
        </div>
        {products.map(product=> (
            <div className="row verticalAlign" key={product.id}>
            <div className="col-2">
            <div className="cart__image">
            <img src={`/images/${product.image}`} />
            </div>
            </div>
                <div className="col-2">
                    <div className="cart__name">
                       {product.name}
                    </div>
                </div>
                <div className="col-2">
                    <div className="cart__price">
                        {currencyFormatter.format(product.discountPrice,{code:'USD'})}
                    </div>
                </div>
                <div className="col-2">
                <div className="details__info">
                    <div className="details__incDec">
                        <span className="dec" onClick={()=> dispatch({type:'DEC',payload:product.id})}><BsDash /></span>
                        <span className="quantity">{product.quantity}</span>
                            <span className="inc" onClick={() => dispatch({type:'INC',payload:product.id})}><BsPlus /></span>
                    </div>
                </div>
                </div>
                <div className="col-2">
                    <div className="cart__total text-center">
                        {currencyFormatter.format(product.discountPrice * product.quantity,{code:'USD'})}
                    </div>
                </div>
                <div className="col-2">
                    <div className="cart__remove" onClick={()=>dispatch({type:'REMOVE',payload:product.id})}>
                    <BsBackspaceReverse/>
                    </div>
                </div>
            </div>
        ))}
        </div>
                   
        <div className="col-3">
        <div className="summary">
        <div className="summary__heading">
                                    Summary
        </div>
        <div className="summary__details">
              <div className="row mb-10">
              <div className="col-6">
              Total Items:
              </div>
                                        <div className="col-6">
                                            {totalQuantity}
                                        </div>
                                        <div className="row mb-10">
                                            <div className="col-6">
                                                Total Price
                                        </div>
                                            <div className="col-6">
                                                {currencyFormatter.format(totalPrice,{code:"USD"})}
                                        </div>
                                        </div>
              </div>                  
        </div>
        </div>
        </div>
                    </div>
        </>:'your cart is empty'  }
        </div>
        </div>
    )
}

export default Cart

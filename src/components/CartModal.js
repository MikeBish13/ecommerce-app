import React from 'react'
import {useStore, displayStore} from '../store'
import {formatNumber, shortenProduct} from '../Helpers/Helpers'
import {Link} from 'react-router-dom'

export default function CartModal() {
    const {cart, increaseQty, decreaseQty, clearCart, cartTotal} = useStore();
    const {setDisplayCart} = displayStore();

    return (
        <div className="cart-modal">
            <div className="cart-box">
                <div className="cart-box-top">
                    <h6>{`Cart (${cart.length})`}</h6>
                    <button className="btn-clear" onClick={clearCart}>Remove all</button>
                </div>
                <div className="cart-box-middle">
                    {cart.map((cartItem, index) => (
                        <div className="cart-box-middle-item" key={index}>
                        <img className="img-thumbnail" src={`.${cartItem.img}`} alt={cartItem.name}></img> 
                        <div className="cart-box-middle-item-details">  
                            <p className="cart-box-middle-item-name">{shortenProduct(cartItem.name)}</p>
                            <p className="cart-box-middle-item-price">$ {formatNumber(cartItem.price)}</p>
                        </div>
                        <div className="add-controls-selection add-controls-selection-cart">
                            <button onClick={() => decreaseQty(cartItem.name, 1)}>-</button>
                            <div>{cartItem.qty}</div>
                            <button onClick={() => increaseQty(cartItem.name, 1)}>+</button>
                        </div>
                        </div>
                    ))}
                </div>
                <div className="cart-box-bottom">
                    <p className="cart-box-bottom-total">Total</p>
                    <p className="para-bold">${formatNumber(cartTotal())}</p>
                </div>
                <Link to='/checkout' className="btn btn-one" onClick={setDisplayCart}>Checkout</Link>
            </div>
        </div>
    )
}

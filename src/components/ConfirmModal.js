import React from "react";
import { Link } from "react-router-dom";
import { displayConfirmation, useStore } from "../store";
import { formatNumber, shortenProduct } from "../Helpers/Helpers";

export default function ConfirmModal() {
  const { setDisplayConfirmation } = displayConfirmation();
  const { clearCart, cart, cartTotal } = useStore();

  const handleReset = () => {
    setDisplayConfirmation();
    clearCart();
  };

  return (
    <div className="confirm-modal">
      <div className="confirm-box">
        <div className="confirm-box-circle"><i class="fas fa-check"></i></div>
        <h3>Thank you for your order</h3>
        <p className="main-para confirm-text">
          You will receive an email confirmation shortly
        </p>
        <div className="confirm-box-container">
          <div className="confirm-box-upper">
            <div className="confirm-box-upper-item">
              <img
                className="img-thumbnail"
                src={`.${cart[0].img}`}
                alt={cart[0].name}
              ></img>
              <div className="confirm-box-upper-item-middle">
                <p>{shortenProduct(cart[0].name)}</p>
                <p className="main-para">${formatNumber(cart[0].price)}</p>
              </div>
              <p className="main-para">x{cart[0].qty}</p>
            </div>
            <p className="main-para cart-length">
              and {cart.length - 1} other item(s)
            </p>
          </div>
          <div className="confirm-box-lower">
            <p className="confirm-total">Grand Total</p>
            <p className="para-bold">
              ${formatNumber(Math.round(cartTotal() + cartTotal() * 0.2 + 50))}
            </p>
          </div>
        </div>
        <Link className="btn btn-one" to="/" onClick={() => handleReset()}>
          Back To Home
        </Link>
      </div>
    </div>
  );
}

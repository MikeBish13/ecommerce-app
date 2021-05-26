import React, { useState } from "react";
import { useStore } from "../store";

export default function AddToCart({ item }) {
  const [quantity, setQuantity] = useState(1);
  const { cart, addToCart, increaseQty } = useStore();

  const setIncrement = (e) => {
    if (e.target.value === "minus" && quantity === 1) {
      return;
    } else if (e.target.value === "plus") {
      setQuantity((prev) => prev + 1);
    } else {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    const product = {
      name: item.name,
      qty: quantity,
      price: item.price,
      img: item.image.mobile,
    };
    if (cart.find((element) => element.name === item.name)) {
      increaseQty(item.name, product.qty);
    } else {
      addToCart(product);
    }
  };

  return (
    <div className="add-controls">
      <div className="add-controls-selection">
        <button type="button" value="minus" onClick={(e) => setIncrement(e)}>
          -
        </button>
        <div>{quantity}</div>
        <button type="button" value="plus" onClick={(e) => setIncrement(e)}>
          +
        </button>
      </div>
      <button
        type="submit"
        className="btn btn-one"
        onClick={() => handleSubmit()}
      >
        Add to Cart
      </button>
    </div>
  );
}

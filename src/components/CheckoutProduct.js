import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, title, price, rating, image }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    // remove item from basket...
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
      title: title,
      price: price,
      rating: rating,
      image: image,
    });
  };

  return (
    <div className="checkoutProduct">
      <img src={image} alt={title} />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map(() => (
              <p>⭐ </p>
            ))}
        </div>

        <button onClick={removeFromBasket}>Remove from bag</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;

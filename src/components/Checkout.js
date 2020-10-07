import { InsertComment } from "@material-ui/icons";
import React from "react";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <img
        className="checkout__ad"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Jupiter/SABS/CategoryStripe/OPS/Phase1/unrec/Unrec_PC_150.jpg"
        alt="Ad"
      />
      {basket?.length === 0 ? (
        <div>
          <h2>Your Shopping Bag is empty.</h2>
          <p>
            You have no items in your bag. Just click on "Add to bag" to buy any
            item.
          </p>
        </div>
      ) : (
        <div>
          <h2 className="checkout__title">Your Shopping Bag</h2>
          {/* List of checkout products */}
          {basket?.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              price={item.price}
              rating={item.rating}
              image={item.image}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Checkout;

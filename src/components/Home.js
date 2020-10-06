import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Xiaomi/Redmi_9A/Flash_Sales/Sale_Today/V242308626_IN_WLME_Redmi_G3L_Tallhero_1500x600._CB406706865_.jpg"
        alt=""
      ></img>

      {/*Product id, title, price, image*/}
      {/*Product*/}
      <div className="home__row">
        <Product
          id="123"
          title="The Call of Cthulhu"
          price={455}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51R2gi4w35L._SX329_BO1,204,203,200_.jpg"
        />
        <Product
          id="123"
          title="The Call of Cthulhu"
          price={455}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51R2gi4w35L._SX329_BO1,204,203,200_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="123"
          title="The Call of Cthulhu"
          price={455}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51R2gi4w35L._SX329_BO1,204,203,200_.jpg"
        />
        <Product
          id="123"
          title="The Call of Cthulhu"
          price={455}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51R2gi4w35L._SX329_BO1,204,203,200_.jpg"
        />
        <Product
          id="123"
          title="The Call of Cthulhu"
          price={455}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51R2gi4w35L._SX329_BO1,204,203,200_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="123"
          title="The Call of Cthulhu"
          price={455}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51R2gi4w35L._SX329_BO1,204,203,200_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;

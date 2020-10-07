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
          id="1"
          title="The Call of Cthulhu - Penguin Orange Classics Special Edition"
          price={455}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51R2gi4w35L._SX329_BO1,204,203,200_.jpg"
        />
        <Product
          id="2"
          title="realme Band (Black) - Full Colour Screen with Touchkey, Real-time Heart Rate Monitor, in-Built USB Charging, IP68 Water Resistant"
          price={1840}
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/I/41en2ctmL-L._AC_US160_FMwebp_QL70_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="3"
          title="Sennheiser CX 275 S In -Ear Universal Mobile Headphone With Mic (Black) "
          price={1749}
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/I/31L54z+40cL._AC_SX184_.jpg"
        />
        <Product
          id="4"
          title="Apple iPhone 11 Pro (64GB) - Space Grey"
          price={455}
          rating={4}
          image="https://m.media-amazon.com/images/I/61m6DjujESL._AC_UY218_.jpg"
        />
        <Product
          id="5"
          title="Razer Kraken Tournament Ed Wired Gaming Headset USB Audio Controller Green (RZ04-02051100-R3M1)"
          price={8799}
          rating={5}
          image="https://m.media-amazon.com/images/I/7128NOTHxTL._AC_UY218_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="6"
          title="Apple MacBook Air (13-inch, 8GB RAM, 128GB Storage, 1.8GHz Intel Core i5) - Silver"
          price={73490}
          rating={4}
          image="https://m.media-amazon.com/images/I/51TdkJSqeQL._AC_UY218_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;

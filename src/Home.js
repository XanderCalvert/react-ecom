import React from "react";
import "./Home.css";
import Product from "./Product";

function home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="../amazonbanner.jpg"
        alt="amazon-banner-image"
      />

      {/* Product id, title, price, rating, image, add to basket */}
      <div className="home__row">
        <Product
          id="01"
          title="Super Mario 64"
          price={30.95}
          rating={5}
          image="../product-01.jpg"
        />
        <Product
          id="01"
          title="Super Mario 64"
          price={30.95}
          rating={5}
          image="../product-01.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="01"
          title="Super Mario 64"
          price={30.95}
          rating={5}
          image="../product-01.jpg"
        />
        <Product
          id="01"
          title="Super Mario 64"
          price={30.95}
          rating={5}
          image="../product-01.jpg"
        />
        <Product
          id="01"
          title="Super Mario 64"
          price={30.95}
          rating={5}
          image="../product-01.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="01"
          title="Super Mario 64"
          price={30.95}
          rating={5}
          image="../product-01.jpg"
        />
      </div>
      {/* Product */}
    </div>
  );
}

export default home;

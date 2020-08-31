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
          id="02"
          title="Banjo-Kazooie"
          price={21.95}
          rating={5}
          image="../product-02.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="03"
          title="The Legend of Zelda: Ocarina of Time"
          price={32.95}
          rating={5}
          image="../product-03.jpg"
        />
        <Product
          id="04"
          title="GoldenEye 007"
          price={46.95}
          rating={5}
          image="../product-04.jpg"
        />
        <Product
          id="05"
          title="Star Wars Episode I: Racer"
          price={18.95}
          rating={5}
          image="../product-05.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="00"
          title="Nintendo 64 console"
          price={127.95}
          rating={5}
          image="../product-00.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="06"
          title="Pokémon Snap"
          price={11.95}
          rating={5}
          image="../product-06.jpg"
        />
        <Product
          id="07"
          title="Pokémon Stadium"
          price={24.95}
          rating={5}
          image="../product-07.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="08"
          title="Rayman 2: The Great Escape"
          price={32.95}
          rating={5}
          image="../product-08.jpg"
        />
        <Product
          id="09"
          title="Mario Party"
          price={29.95}
          rating={5}
          image="../product-09.jpg"
        />
        <Product
          id="10"
          title="Mario Kart 64"
          price={29.95}
          rating={5}
          image="../product-10.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="11"
          title="WWF: No Mercy"
          price={10.95}
          rating={5}
          image="../product-11.jpg"
        />
        <Product
          id="12"
          title="Diddy Kong Racing"
          price={29.95}
          rating={5}
          image="../product-12.jpg"
        />
      </div>
      {/* Product */}
    </div>
  );
}

export default home;

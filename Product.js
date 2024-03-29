import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, price, rating, image }) {
  const [, dispatch] = useStateValue();

  const addToCart = () => {
    // Add item to the basket
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        price: price,
        rating: rating,
        image: image,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>£</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img className="product__image" src={image} alt="" />
      <button onClick={addToCart} className="product__button">
        Add to basket
      </button>
    </div>
  );
}

export default Product;

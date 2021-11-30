import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Product.css";

function Product({ id, title, image, price, rating }) {
  const {basket} = useSelector((state) => state.checkout);

  console.log(basket, '>>>>>>>>>>>>>>>>>>>.This is basket')
  const dispatch = useDispatch();

  const addItemsToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        {/* <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div> */}
      </div>

      <img src={image} alt="" />

      <button onClick={addItemsToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;

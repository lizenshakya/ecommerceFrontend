import React from "react";
import { useSelector } from "react-redux";
import "./Subtotal.css";
import * as CurrencyFormat from "react-currency-format";
// import { useStateValue } from "./StateProvider";
//import { getBasketTotal } from "./reducer";
//import { useNavigate } from "react-router-dom";

function Subtotal() {
  const {basket} = useSelector((state) => state.checkout);
  const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0)

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
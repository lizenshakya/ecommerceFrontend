import * as actionType from "../constants/actionTypes";

const checkoutReducer = (state = { basket: [] }, action) => {
  console.log({ state, action }, ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
  switch (action.type) {
    case actionType.ADD_TO_BASKET:
      return {
        ...state,
        basket: [...state.basket, action.item],
        loading: false,
        errors: null,
      };

    case actionType.REMOVE_FROM_BASKET:
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn("Cant remove");
      }
      console.log(newBasket, "newBasket>>>>>>>>>>>>>>>>>>>");
      return {
        ...state,
        basket: newBasket,
        loading: false,
        errors: null,
      };

    default:
      return state;
  }
};

export default checkoutReducer;

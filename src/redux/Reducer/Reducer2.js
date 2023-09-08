import {
  DELETE_PRODUCT,
  } from '../types/types/types';

  const initialState = {
    cartItems: [],
  };
  
  
  const deleteCartReducer = (state = initialState, action) => {
    switch (action.type) {
      case DELETE_PRODUCT:
        return {
          ...state,
          cartItems: state.cartItems.filter((item) => item.id !== action.payload),
        };
      default:
        return state;
    }
  };
  export default deleteCartReducer;
  
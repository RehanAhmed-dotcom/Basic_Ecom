

export const addItem = item => {
  return {
    type: 'ADD_ITEM',
    payload: item
  };
};

export const removeItem = id => {
  return {
    type: 'REMOVE_ITEM',
    payload: {
      id
    }
  };
};

export const updateQuantity = (id, quantity) => {
  return {
    type: 'UPDATE_QUANTITY',
    payload: {
      id,
      quantity
    }
  };
  
};

export const removeFromCart = id => dispatch => {
  dispatch({
    type: 'REMOVE_FROM_CART',
    payload: {id},
  });
};
export const emptyCartItem = ()=> dispatch => {
  dispatch({
    type: 'EMPTY_CART',
    
  });
};

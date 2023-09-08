import {ADD_TO_CART, REMOVE_FROM_CART} from '../types/types/types';

const initialState = {
  items: [],
  total: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const existingItemIndex = state.items.findIndex(
        item => item.id === action.payload.id,
      );
      if (existingItemIndex !== -1) {
        // Item already exists in cart, update its quantity
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex].quantity += 1;
        return {
          ...state,
          items: updatedItems,
          total: state.total + action.payload.price,
        };
      } else {
        // Item doesn't exist in cart, add it with a quantity of 1
        return {
          ...state,
          items: [...state.items, {...action.payload, quantity: 1}],
          total: state.total + action.payload.price,
        };
      }
    case 'REMOVE_ITEM':
      const itemToRemoveIndex = state.items.findIndex(
        item => item.id === action.payload.id,
      );
      const itemToRemove = state.items[itemToRemoveIndex];
      if (itemToRemove.quantity > 1) {
        // Item quantity is greater than 1, update its quantity
        const updatedItems = [...state.items];
        updatedItems[itemToRemoveIndex].quantity -= 1;
        return {
          ...state,
          items: updatedItems,
          total: state.total - itemToRemove.price,
        };
      } else {
        // Item quantity is 1, remove it from cart
        return {
          ...state,
          items: state.items.filter(item => item.id !== action.payload.id),
          total: state.total - itemToRemove.price,
        };
      }
    case 'UPDATE_QUANTITY':
      const updatedItems = [...state.items];
      const itemToUpdateIndex = updatedItems.findIndex(
        item => item.id === action.payload.id,
      );
      updatedItems[itemToUpdateIndex].quantity = action.payload.quantity;
      return {
        ...state,
        items: updatedItems,
        total: state.items.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0,
        ),
      };

    case 'REMOVE_FROM_CART':
      const itemToRemoveIndexs = state.items.findIndex(
        item => item.id === action.payload.id,
      );
      const itemToRemoves = state.items[itemToRemoveIndexs];
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id),
        total: state.total - itemToRemoves.price,
      };
    // const arr = [...state.items];
    // const fIndex = arr.findIndex(item => item.id === action.payload.id);
    // if (fIndex > -1) {
    //   arr.splice(fIndex, 1);
    // }

    case 'EMPTY_CART':
      return {
        ...state,
        items: [],
        price:0
      };

    default:
      return state;
  }
};

export default cartReducer;

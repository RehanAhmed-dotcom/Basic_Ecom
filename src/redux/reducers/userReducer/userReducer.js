import {USER} from '../../types/types/types';

const initialState = {
  user:null
};

const myuserReducer = (state = initialState, {type, payload}) => {
  // console.log("-----=======",payload)
  switch (type) {
    case USER:
      return {...state, user:payload};
    default:
      return state;
  }
};

export default myuserReducer;
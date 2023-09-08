import {USER} from '../../types/types/types';

export const Storeuser = payload => dispatch => {
    console.log("Redux save data",payload)
    dispatch({type: USER, payload});
  };

import { CITY_REDUX_TYPES } from 'enums/city';
import { ICityState, TCityAction } from 'types/city';

const initialState: ICityState = {
  currentCity: {
    "id": 1,
    "title": "Tokyo",
    "lat": 35.6828387,
    "lon": 139.7594549
  },
}

const cityReducer = (state = initialState, action: TCityAction) =>{
  switch (action.type) {
    case CITY_REDUX_TYPES.SET_CURRENT_CITY:
      return {
        state, 
        currentCity: action.payload
      }
    default:
      return state;
  }
}

export default cityReducer;
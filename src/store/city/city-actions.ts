import { CITY_REDUX_TYPES } from 'enums/city';
import { ICity } from 'types/city';

const setCurrentCity = (city: ICity) =>({
  type: CITY_REDUX_TYPES.SET_CURRENT_CITY,
  payload: city
})

export {setCurrentCity}
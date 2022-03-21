import { CITY_REDUX_TYPES } from 'enums/city';

const setCurrentCity = (city: string) =>({
  type: CITY_REDUX_TYPES.SET_CURRENT_CITY,
  payload: city
})

export {setCurrentCity}
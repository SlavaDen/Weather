import { CITY_REDUX_TYPES } from 'enums/city';

export interface ICityState {
  currentCity: string,
}

interface ISetCurrentCityAction {
  type: CITY_REDUX_TYPES.SET_CURRENT_CITY
  payload: string
}

export type TCityAction = ISetCurrentCityAction
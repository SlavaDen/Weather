import { CITY_REDUX_TYPES } from 'enums/city';

export interface ICity {
  id: number,
  title: string,
  lat: number,
  lon: number
}

export interface ICityState {
  currentCity: ICity,
}

interface ISetCurrentCityAction {
  type: CITY_REDUX_TYPES.SET_CURRENT_CITY
  payload: ICity
}

export type TCityAction = ISetCurrentCityAction
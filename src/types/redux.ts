
import { IWeatherState } from "types/weather";
import { TApi } from 'types/api';
import { store } from 'store/';
import { ICityState } from './city';

export type TState = {
  weather: IWeatherState,
  city: ICityState
}

export type TAppDispatch = typeof store.dispatch;

export type TExtra = {
  api: TApi
}
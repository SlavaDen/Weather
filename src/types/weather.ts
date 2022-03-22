import { WEATHER_REDUX_TYPES } from 'enums/weather';
import { TLoading } from 'types/app';

export interface IWeatherToday {
  main: string,
  description: string,
  temp: number,
  feelsLike: number,
  pressure: number,
  humidity: number,
  clouds: number,
  windSpeed: number,
}

interface ITemp{
  day: number,
  eve: number,
  max: number,
  min: number,
  morn: number,
  night: number,
}

export interface IWeatherDay {
  day: number,
  temp: ITemp,
  main: string,
  description: string,
}

export interface IWeatherState {
  today: IWeatherToday,
  daily: IWeatherDay[],
  loading: TLoading,
}

interface ISetWeatherTodayAction {
  type: WEATHER_REDUX_TYPES.SET_TODAY
  payload: IWeatherToday
}

interface ISetWeatherDailyAction {
  type: WEATHER_REDUX_TYPES.SET_DAILY
  payload: IWeatherDay[]
}

interface ISetWeatherLoadingAction {
  type: WEATHER_REDUX_TYPES.SET_LOADING
  payload: TLoading
}

export type TWeatherAction = ISetWeatherTodayAction | ISetWeatherDailyAction | ISetWeatherLoadingAction
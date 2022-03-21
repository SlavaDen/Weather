import { WEATHER_REDUX_TYPES } from 'enums/weather';

export interface IWeatherToday {
  weather: string,
  description: string,
  temp: number,
  feels_like: number,
  temp_min: number,
  temp_max: number,
  pressure: number,
  humidity: number,
}

export interface IWeatherState {
  currentCity: "",
  today: IWeatherToday
}

interface ISetWeatherTodayAction {
  type: WEATHER_REDUX_TYPES.SET_WEATHER_TODAY
  payload: IWeatherToday
}

export type TWeatherAction = ISetWeatherTodayAction
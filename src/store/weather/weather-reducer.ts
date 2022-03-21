

import { IWeatherState, TWeatherAction } from 'types/weather';
import { WEATHER_REDUX_TYPES } from 'enums/weather';

const initialState: IWeatherState = {
  currentCity: "",
  today: {
    weather: "",
    description: "",
    temp: 0,
    feels_like: 0,
    temp_min: 0,
    temp_max: 0,
    pressure: 0,
    humidity: 0,
  },
}

const weatherReducer = (state = initialState, action: TWeatherAction) =>{
  switch (action.type) {
    case WEATHER_REDUX_TYPES.SET_WEATHER_TODAY:
      return {
        state, 
        today: action.payload
      }
    default:
      return state;
  }
}

export default weatherReducer;
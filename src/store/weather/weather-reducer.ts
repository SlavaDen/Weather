

import { IWeatherState, TWeatherAction } from 'types/weather';
import { WEATHER_REDUX_TYPES } from 'enums/weather';
import { LOADING } from 'enums/loading';

const initialState: IWeatherState = {
  today: {
    main: "",
    description: "",
    temp: 0,
    feelsLike: 0,
    pressure: 0,
    humidity: 0,
    clouds: 0,
    windSpeed: 0,
  },
  daily: [],
  loading: LOADING.pending,
}

const weatherReducer = (state = initialState, action: TWeatherAction) =>{
  switch (action.type) {
    case WEATHER_REDUX_TYPES.SET_TODAY:
      return {
        ...state, 
        today: action.payload
      }
    case WEATHER_REDUX_TYPES.SET_DAILY:
      return {
        ...state, 
        daily: action.payload
      }
    case WEATHER_REDUX_TYPES.SET_LOADING:
      return {
        ...state, 
        loading: action.payload
      }
    default:
      return state;
  }
}

export default weatherReducer;
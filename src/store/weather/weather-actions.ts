
import { IWeatherToday } from "types/weather";
import { WEATHER_REDUX_TYPES } from 'enums/weather';
import { TApiError } from "types/api";
import { TAppDispatch, TExtra } from "types/redux";

const setWeatherToday = (weather: IWeatherToday) =>({
  type: WEATHER_REDUX_TYPES.SET_WEATHER_TODAY,
  payload: weather
})

const loadWeatherToday = (city: string)=>(dispatch:TAppDispatch , _: any, extra: TExtra)=>{
  extra.api.getWeatherByCity(city)
  .then((response: any)=>{

    const responseData = response.data;

    const weather: IWeatherToday = {
      weather: responseData?.weather[0]?.main,
      description: responseData?.weather[0]?.description,
      temp: responseData?.main?.temp,
      feels_like: responseData?.main?.feels_like,
      temp_min: responseData?.main?.temp_min,
      temp_max: responseData?.main?.temp_max,
      pressure: responseData?.main?.pressure,
      humidity: responseData?.main?.humidity,
    }

    dispatch(setWeatherToday(weather))
  })
  .catch((error: TApiError)=>{
    console.log(error)
  });
}

export {loadWeatherToday};

import {  IWeatherDay, IWeatherToday } from "types/weather";
import { WEATHER_REDUX_TYPES } from 'enums/weather';
import { TApiError } from "types/api";
import { TAppDispatch, TExtra } from "types/redux";
import { LOADING } from "enums/loading";
import { TLoading } from 'types/app';

const setToday = (weather: IWeatherToday) =>({
  type: WEATHER_REDUX_TYPES.SET_TODAY,
  payload: weather
})

const setDaily = (daily: IWeatherDay []) =>({
  type: WEATHER_REDUX_TYPES.SET_DAILY,
  payload: daily
})

const setLoading = (loading: TLoading) =>({
  type: WEATHER_REDUX_TYPES.SET_LOADING,
  payload: loading
})

const getWeather = (lat: number, lon: number)=>(dispatch:TAppDispatch , _: any, extra: TExtra)=>{
  dispatch(setLoading(LOADING.pending));
  extra.api.getWeather(lat, lon)
  .then((response: any)=>{

    const responseData = response.data;

    const weatherToday: IWeatherToday = {
      main: responseData?.current.weather[0]?.main,
      description: responseData?.current.weather[0]?.description,
      temp: responseData?.current.temp,
      feelsLike: responseData?.current?.feels_like,
      pressure: responseData?.current.pressure,
      humidity: responseData?.current.humidity,
      clouds: responseData?.current.clouds,
      windSpeed: responseData?.current.wind_speed,
    }

    dispatch(setToday(weatherToday));

    const daily = responseData.daily.reduce((acc: IWeatherDay[], day: any)=>{
        const weatherDay: IWeatherDay = {
          day: day.dt,
          temp: day.temp,
          main: day.weather[0].main,
          description: day.weather[0].description,
        }
        acc.push(weatherDay);
        return acc;
    }, []);

    dispatch(setDaily(daily));
    dispatch(setLoading(LOADING.fulfilled));
  })
  .catch((error: TApiError)=>{
    console.log(error)
  });
}

export {getWeather};
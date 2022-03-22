import WeatherToday from "components/weather/WeatherToday";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentCity } from "store/city/city-selectors";
import { getWeather } from "store/weather/weather-actions";
import s from "./index.module.scss";
import WeatherTodayInfo from 'components/weather/WeatherTodayInfo';
import WeatherDaily from 'components/weather/WeatherDaily';

const WeatherPage = () => {

  const dispath = useDispatch();

  const currentCity = useSelector(selectCurrentCity);

  useEffect(() => {
    dispath(getWeather(currentCity.lat, currentCity.lon));
  }, [currentCity])

  return (
    <>
      <div className={s.weatherToday}>
        <WeatherToday />
        <WeatherTodayInfo />
      </div>
      <div className={s.weatherDaily}>
        <WeatherDaily />
      </div>
    </>
  )
}

export default WeatherPage;
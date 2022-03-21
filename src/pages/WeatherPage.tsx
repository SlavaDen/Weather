import WeatherToday from "components/weather/WeatherToday";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentCity } from "store/city/city-selectors";
import { loadWeatherToday } from "store/weather/weather-actions";
import s from "./index.module.scss";
import WeatherTodayInfo from './../components/weather/WeatherTodayInfo';

const WeatherPage = () => {

  const dispath = useDispatch();

  const currentCity = useSelector(selectCurrentCity);

  useEffect(() => {
    dispath(loadWeatherToday(currentCity));
  }, [currentCity])

  return (
    <div className={s.grid}>
      <WeatherToday />
      <WeatherTodayInfo />
    </div>
  )
}

export default WeatherPage;
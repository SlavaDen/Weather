import s from "./index.module.scss";
import { Card, CardContent, Stack, Typography, FlexSeparator } from "../common";
import { useSelector } from 'react-redux';
import { selectDaily, selectLoading } from "store/weather/weather-selectors";
import WeatherDay from './WeatherDay';
import { LOADING } from 'enums/loading';
import Skeleton from './../common/Skeleton';

const WeatherDaily = () => {

  const weatherDaily = useSelector(selectDaily);
  const loading = useSelector(selectLoading);

  if (loading === LOADING.pending) {
    return <Skeleton>123131313</Skeleton>
  }

  return (
    <Card className={s.weatherDaily_card}>
      <CardContent>
        <div className={s.weatherDaily_days}>
          {
            weatherDaily.map((weatherDay) =>
              <WeatherDay key={weatherDay.day} {...weatherDay} />
            )
          }
        </div>
      </CardContent>
    </Card >
  )
}

export default WeatherDaily;
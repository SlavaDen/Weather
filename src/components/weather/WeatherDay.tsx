import s from "./index.module.scss";
import { Card, CardContent } from "components/common";
import { IWeatherDay } from "types/weather";
import Typography from './../common/Typography';
import WeatherIcon from './WeatherIcon';

const WeatherDay: React.FC<IWeatherDay> = (props) => {

  const { day, main, description, temp } = props;

  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];

  return (
    <Card className={s.weatherDay_card}>
      <CardContent>
        <Typography variant="h3">
          {days[new Date(day * 1000).getDay()]}
        </Typography>
        <Typography color="gray" className={s.weatherDay_date}>
          {new Date(day * 1000).toLocaleDateString()}
        </Typography>
        <WeatherIcon main={main} />
        <Typography variant="h3">
          {temp.max}°
        </Typography>
        <Typography color="gray">
          {temp.min}°
        </Typography>
        <Typography color="gray">
          {description}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default WeatherDay;
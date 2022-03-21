import s from "./index.module.scss";
import { Card, CardContent, Stack, Typography, FlexSeparator } from "../common";
import WeatherIcon from './WeatherIcon';
import { useSelector } from "react-redux";
import { selectWeatherToday } from "store/weather/weather-selectors";
import { selectCurrentCity } from 'store/city/city-selectors';
import { WiHumidity } from "react-icons/wi";
const WeatherToday = () => {

  const weatherToday = useSelector(selectWeatherToday);
  const currentCity = useSelector(selectCurrentCity);

  return (
    <Card>
      <CardContent>
        <Stack>
          <WeatherIcon />
          <div>
            <Typography color="blue" variant="h1">
              {weatherToday.temp}
            </Typography>
            <Typography>
              City: <span>{currentCity}</span>
            </Typography>
          </div>
          <div>
            <Typography>
              {weatherToday.weather}
            </Typography>
            <Typography>
              Feels like: {weatherToday.feels_like}
            </Typography>
          </div>
        </Stack>


        <Typography>
          Temp min: {weatherToday.temp_min}
        </Typography>
        <Typography>
          Temp max: {weatherToday.temp_max}
        </Typography>
        <Typography>
          Pressure: {weatherToday.pressure}
        </Typography>
        <Typography>
          <WiHumidity /> {weatherToday.humidity}
        </Typography>
        <Typography>
          Time: <span>{new Date().toLocaleTimeString()}</span>
        </Typography>

      </CardContent>
    </Card>
  )
}

export default WeatherToday;
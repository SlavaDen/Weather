import { Card, CardContent, Stack, Typography, FlexSeparator } from "../common";
import WeatherIcon from './WeatherIcon';
import { useSelector } from "react-redux";
import { selectToday } from "store/weather/weather-selectors";
import { selectCurrentCity } from 'store/city/city-selectors';

const WeatherToday = () => {

  const weatherToday = useSelector(selectToday);
  const currentCity = useSelector(selectCurrentCity);

  return (
    <Card>
      {
        weatherToday ? (
          <CardContent>
            <Stack>
              <div>
                <Typography
                  variant="h1"
                  fontSize={34}
                  color="blue"
                >
                  {weatherToday.temp}°
                </Typography>
                <Typography variant="h1" fontSize={34}>
                  Today
                </Typography>
              </div>
              <FlexSeparator />
              <WeatherIcon main={weatherToday.main} size={110} />
            </Stack>
            <Typography color="gray" fontSize={24}>
              City: <span>{currentCity.title}</span>
            </Typography>
            <Typography color="gray" fontSize={24}>
              Time: <span>{new Date().toLocaleTimeString()}</span>
            </Typography>
          </CardContent>
        ) : null
      }

    </Card>
  )
}

export default WeatherToday;
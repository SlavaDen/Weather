import s from "./index.module.scss";
import { Card, CardContent, Stack, Typography, FlexSeparator } from "../common";
import WeatherIcon from './WeatherIcon';

const WeatherTodayInfo = () => {
  return (
    <Card>
      <CardContent>
        <Stack>
          <Typography color="blue" variant="h1">20 °</Typography>
          <FlexSeparator />
          <WeatherIcon />
        </Stack>
        <h1>Сегодня </h1>
        <h1>Время: <span>21:54</span></h1>
        <h1>Город: <span>Санкт-Петербург</span></h1>
      </CardContent>
    </Card>
  )
}

export default WeatherTodayInfo;
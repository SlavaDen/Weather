import s from "./index.module.scss";
import { Card, CardContent, Stack, Typography, FlexSeparator } from "../common";
import temp from "assets/icons/temp.svg";
import pressure from "assets/icons/pressure.svg";
import windSpeed from "assets/icons/windSpeed.svg";
import cloudsInfo from "assets/icons/cloudsInfo.svg";
import { useSelector } from "react-redux";
import { selectToday } from 'store/weather/weather-selectors';

const WeatherTodayInfo = () => {
  const weatherToday = useSelector(selectToday);
  return (
    <Card>
      <CardContent>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 45
        }}>
          <Stack>
            <img src={temp} className={s.weatherTodayInfo_icon} />
            <Typography fontSize={20} color="gray">
              Temperature
            </Typography>
            <Typography fontSize={20}>
              {weatherToday.temp} Feels Like {weatherToday.feelsLike}
            </Typography>
            <FlexSeparator />
          </Stack>
          <Stack>
            <img src={windSpeed} className={s.weatherTodayInfo_icon} />
            <Typography fontSize={20} color="gray">
              Wind Speed
            </Typography>
            <Typography fontSize={20}>
              {weatherToday.windSpeed}
            </Typography>
            <FlexSeparator />
          </Stack>
          <Stack>
            <img src={pressure} className={s.weatherTodayInfo_icon} />
            <Typography fontSize={20} color="gray">
              Pressure
            </Typography>
            <Typography fontSize={20}>
              {weatherToday.pressure}
            </Typography>
            <FlexSeparator />
          </Stack>
          <Stack>
            <img src={cloudsInfo} className={s.weatherTodayInfo_icon} />
            <Typography fontSize={20} color="gray">
              Clouds
            </Typography>
            <Typography fontSize={20}>
              {weatherToday.clouds}
            </Typography>
            <FlexSeparator />
          </Stack>
        </div>
      </CardContent>
    </Card>
  )
}

export default WeatherTodayInfo;
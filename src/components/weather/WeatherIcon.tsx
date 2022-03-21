import { BsSun } from "react-icons/bs";
import s from "./index.module.scss";
import rain from "assets/icons/Rain.svg";

const WeatherIcon = () => {
  return (
    <img src={rain} className={s.weatherIcon_clear} />
  )
}

export default WeatherIcon;
import s from "./index.module.scss";
import { TiWeatherCloudy } from "react-icons/ti";
import { Stack } from "../common";

const Logotype = () => {
  return (
    <Stack>
      <TiWeatherCloudy className={s.lotoype_icon} />
      <p className={s.lotoype_text}>Weather</p>
    </Stack>
  )
}

export default Logotype;
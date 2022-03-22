import s from "./index.module.scss";
import logotype from "assets/icons/clear.svg"
import { Stack } from "../common";

const Logotype = () => {
  return (
    <Stack>
      <img src={logotype} className={s.lotoype_icon} />
      <p className={s.lotoype_text}>Weather</p>
    </Stack>
  )
}

export default Logotype;
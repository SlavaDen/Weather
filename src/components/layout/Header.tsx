import s from "./index.module.scss";
import Logotype from "./Logotype";
import { FlexSeparator, Stack } from "../common";
import SelectCountry from './SelectCountry';

const Header = () => {
  return (
    <header>
      <Stack>
        <Logotype />
        <FlexSeparator />
        <Stack className={s.header_tools}>
          <SelectCountry />
        </Stack>
      </Stack>
    </header>
  )
}

export default Header;
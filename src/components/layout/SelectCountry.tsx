import s from "./index.module.scss";
import cities from "data/cities.json";
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentCity } from 'store/city/city-selectors';
import { setCurrentCity } from "store/city/city-actions";

const SelectCountry: React.FC = () => {

  const dispatch = useDispatch();
  const currentCity = useSelector(selectCurrentCity);

  const handleChangeCurrentCity = (city: string) => {
    dispatch(setCurrentCity(city));
  }

  return (
    <select
      value={currentCity}
      onChange={(event) => handleChangeCurrentCity(event.target.value)}
    >
      {
        cities.map((city) => (
          <option key={city.id}>{city.title}</option>
        ))
      }
    </select>
  )
}

export default SelectCountry;
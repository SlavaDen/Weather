import s from "./index.module.scss";
import cities from "data/cities.json";
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentCity } from 'store/city/city-selectors';
import { setCurrentCity } from "store/city/city-actions";

const SelectCountry: React.FC = () => {

  const dispatch = useDispatch();
  const currentCity = useSelector(selectCurrentCity);

  const handleChangeCurrentCity = (cityId: string) => {

    const newCity = cities.find((currentCity) => currentCity.id === parseInt(cityId)) || cities[0];

    console.log(newCity)
    dispatch(setCurrentCity(newCity));
  }

  return (
    <select
      value={currentCity.id}
      onChange={(event) => handleChangeCurrentCity(event.target.value)}
      className={s.selectCountry}
    >
      {
        cities.map((city) => (
          <option key={city.id} value={city.id}>{city.title}</option>
        ))
      }
    </select>
  )
}

export default SelectCountry;
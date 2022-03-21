import { TState } from "types/redux";

const selectWeatherToday = (state: TState) => state.weather.today;

export {selectWeatherToday};
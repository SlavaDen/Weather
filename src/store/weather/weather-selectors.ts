import { TState } from "types/redux";

const selectToday = (state: TState) => state.weather.today;

const selectDaily = (state: TState) => state.weather.daily;

const selectLoading = (state: TState) => {
  return state.weather.loading
};

export {selectToday, selectDaily, selectLoading};
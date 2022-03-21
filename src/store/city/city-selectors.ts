import { TState } from "types/redux";

const selectCurrentCity = (state: TState) => state.city.currentCity;

export {selectCurrentCity};
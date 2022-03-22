import { instance } from "./"

const getWeather = async (lat: number, lon: number) =>{
  const response = await instance.get(`onecall?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.API_KEY}`);

  return (response);
}

export {getWeather};
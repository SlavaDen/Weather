import { instance } from "./"

const getWeatherByCity = async (city: string) =>{
  const response = await instance.get(`weather?q=${city}&appid=${process.env.API_KEY}`);

  return (response);
}

export {getWeatherByCity};
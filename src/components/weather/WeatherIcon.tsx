import clearSky from "assets/icons/clearSky.svg";
import fewClouds from "assets/icons/fewClouds.svg";
import scatteredClouds from "assets/icons/scatteredClouds.svg";
import showerRain from "assets/icons/showerRain.svg";
import rain from "assets/icons/rain.svg";
import clouds from "assets/icons/clouds.svg";
import clear from "assets/icons/clear.svg";

interface IWeatherIcon {
  main: string,
  size?: number
}

const WeatherIcon: React.FC<IWeatherIcon> = (props) => {

  const { main = "", size = 60 } = props;

  const style = {
    height: size,
    width: size,
  }

  switch (main.toLocaleLowerCase()) {
    case "clear sky":
      return <img src={clearSky} style={style} />
    case "few clouds":
      return <img src={fewClouds} style={style} />
    case "scattered clouds":
      return <img src={scatteredClouds} style={style} />
    case "broken clouds":
      return <img src={scatteredClouds} style={style} />
    case "shower rain":
      return <img src={showerRain} style={style} />
    case "rain":
      return <img src={rain} style={style} />
    case "clouds":
      return <img src={clouds} style={style} />
    case "clear":
      return <img src={clear} style={style} />
    default:
      return <img src={clear} style={style} />
  }
}

export default WeatherIcon;
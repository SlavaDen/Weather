import WeatherPage from "pages/WeatherPage";
import { Routes, Route } from "react-router-dom";
import PrimaryLayout from "./hoc/PrimaryLayout";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={
        <PrimaryLayout>
          <WeatherPage />
        </PrimaryLayout>
      }
      />
    </Routes>
  )
}

export default App;
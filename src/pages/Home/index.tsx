import React, { useCallback, useState, useEffect } from "react";
import weather from "../../services/weather";
import config from "../../config";
import { HashLoader } from "react-spinners";
// import { Container } from './styles';

const Home: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [forecast, setForecast] = useState<any>();

  const getWeather = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await weather.get(
        `${config?.FORECAST_URL}?latitude=-8.05428&longitude=-34.8813&current_weather=true`
      );
      setForecast(data);
      console.log(data);
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getWeather();
  }, [getWeather]);

  return (
    <div>
      {!loading ? (
        <>
          <h1>A temperatura atual é:</h1>
          <h2>{forecast?.current_weather?.temperature}°C</h2>
        </>
      ) : (
        <div style={{ display: "flex" }}>
          <HashLoader color="#fff" />
        </div>
      )}
    </div>
  );
};

export default Home;

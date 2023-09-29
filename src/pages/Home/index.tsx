import React, { useCallback, useState, useEffect } from "react";
import weather from "../../services/weather";
import config from "../../config";
import { HashLoader } from "react-spinners";
import { Container } from "./styles";
import {
  TiWeatherSunny,
  TiWeatherCloudy,
  TiWeatherWindy,
  TiWeatherShower,
} from "react-icons/ti";
import { AiOutlineSearch } from "react-icons/ai";
import { useFormik } from "formik";
import geocoding from "../../services/geocoding";
// import { Container } from './styles';

const Home: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [forecast, setForecast] = useState<any>();

  const getWeather = useCallback(async (city?: string) => {
    try {
      setLoading(true);
      console.log(city);
      const { data } = await weather.get(
        `${config?.FORECAST_URL}?latitude=-8.05428&longitude=-34.8813&current_weather=true`
      );
      setForecast(data);
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      console.log(error);
    }
  }, []);

  const getGeocoding = useCallback(async (city?: string) => {
    try {
      setLoading(true);
      const { data } = await geocoding.get(
        `${config?.GEOCODING_URL}?city=${city}`
      );
    } catch (error: any) {
      setLoading(false);
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getWeather();
  }, [getWeather]);

  const formik = useFormik({
    initialValues: {
      city: "",
    },
    onSubmit: (values) => {
      getGeocoding(values?.city);
    },
  });
  return (
    <Container>
      <nav>
        <div className="logo">
          <TiWeatherSunny color="#fff" />
          <TiWeatherShower color="#fff" />
          <TiWeatherWindy color="#fff" />
          <TiWeatherCloudy color="#fff" />
        </div>
        <div className="search">
          <form>
            <input
              type="text"
              placeholder="Digite o nome da cidade"
              value={formik.values.city}
              onChange={(e) => formik.setFieldValue("city", e.target.value)}
            />
            <button type="button" onClick={() => formik.handleSubmit()}>
              <AiOutlineSearch />
            </button>
          </form>
        </div>
      </nav>
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
      <footer>
        Desenvolvido com React + TypeScript + Vite por{" "}
        <a href="https://github.com/vicmouz">Victor Mouzinho</a>
      </footer>
    </Container>
  );
};

export default Home;

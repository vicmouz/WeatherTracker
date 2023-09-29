import axios from "axios";

const geocoding = axios.create({
  baseURL: import.meta.env.VITE_GEOCODING_API_URL,
  timeout: 50000,
});

export default geocoding;

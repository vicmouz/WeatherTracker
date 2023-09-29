/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WEATHER_API_URL: string;
  readonly VITE_GEOCODING_API_URL: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

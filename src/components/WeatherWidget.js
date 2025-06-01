import React, { useState, useEffect } from "react";
import cities from "../data/cities.json"; // importでJSONを読み込む

// OpenWeatherMapのAPIキーをセット（自分のキーに置き換えてください）
const API_KEY = "d9d86bc446732daffc64554c58ba675d";

const WeatherWidget = () => {
  const [cityId, setCityId] = useState(cities[0]?.id ?? "");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  // 都市変更時に天気取得
  useEffect(() => {
    if (!cityId) return;
    setWeather(null);
    setError("");
    // 無名関数で即時実行
    (async () => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${API_KEY}&units=metric&lang=ja`
        );
        if (!res.ok) {
          throw new Error("APIリクエストエラー: " + res.status);
        }
        const data = await res.json();
        setWeather(data);
      } catch (e) {
        setError("天気情報の取得に失敗しました: " + e.message);
      }
    })();
  }, [cityId]);

  return (
    <div className="weather-widget">
      <h2>天気情報</h2>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!cityId) setError("都市を選択してください");
        }}
      >
        <label>
          都市:
          <select
            value={cityId}
            onChange={e => setCityId(e.target.value)}
            name="city"
          >
            {cities.map(city => (
              <option value={city.id} key={city.id}>{city.name}</option>
            ))}
          </select>
        </label>
      </form>
      {error && <p className="error">{error}</p>}
      {weather ? (
        <div>
          <h3>{weather.name}の天気</h3>
          <p>
            {weather.weather[0].description}{" "}
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
            />
          </p>
          <p>気温: {weather.main.temp} ℃</p>
          <p>湿度: {weather.main.humidity} %</p>
          <p>風速: {weather.wind.speed} m/s</p>
        </div>
      ) : !error ? (
        <p>取得中...</p>
      ) : null}
    </div>
  );
};

export default WeatherWidget;
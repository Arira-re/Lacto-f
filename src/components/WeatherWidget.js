import React, { useState, useEffect } from "react";
import cities from "../data/cities.json"; // importでJSONを読み込む

const WeatherWidget = () => {
  const [cityId, setCityId] = useState(cities[0]?.id ?? "");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  // 都市変更時に天気取得
  useEffect(() => {
    if (!cityId) return;// セットされてなければパス
    // 初期化
    setWeather(null);
    setError("");
    // 非同期で即時実行
    (async () => {
      try {
        const res = await fetch(
          // Django(バックエンド)から天気情報を取得
          `http://localhost:8000/api/weatheracity_id=${cityId}`
        );
        // error
        if (!res.ok) {
          throw new Error("APIリクエストエラー: " + res.status);
        }
        const data = await res.json();
        setWeather(data);
      } catch (e) {
        setError("天気情報の取得に失敗しました: " + e.message);
      }
    })();
  }, [cityId]);// cityIdが変更されると実行

  return (
    <div>
      <h2 className="sm:text-3xl sm:leading-10">天気情報</h2>
      {/* 都市選択フォーム */}
      <form
        onSubmit={e => {
          e.preventDefault();// リロード、ジャンプ防止
          if (!cityId) setError("都市を選択してください");
        }}
      >
        <label>
          都市:
          <select
            value={cityId}// cityID(json)から選択
            onChange={e => setCityId(e.target.value)}
            name="city"
          >
            {cities.map(city => (
              <option value={city.id} key={city.id}>{city.name}</option>
            ))}
          </select>
        </label>
      </form>
      {/* エラーがあれば表示 */}
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
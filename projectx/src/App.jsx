import { useState } from "react";
import "./App.css";
import axios from "axios";
import Weather from "./componets/XWeather";
import Footer from "./componets/Footer";

function App() {
  const [data, setData] = useState({});
  const [city, setCity] = useState("");

  const API_KEY = "13d787b766f8f5cfc1d56aab4a8a9fc5";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

  const searchCity = (e) => {
    if (e.key === "Enter") {
      axios
        .get(url)
        .then((response) => {
          setData(response.data);
          console.table(response.data);
        })
        .catch((error) => {
          console.error("Error fetching the weather data: ", error);
        });

      setCity("");
    }
  };
  return (
    <>
      <div className="bg-gradient-to-l from-red-700 rounded-xl m-auto px-8 relative top-[10%] h-auto ">
        <div className="w-full h-full flex flex-col items-center justify-center ">
          <div className="text-center p-4">
            <input
              type="text"
              className="h-16 py-3 px-6 w-[450px] text-lg rounded-3xl border border-red-600 text-blue-800 text-bold uppercase  placeholder:text-yellow-800 focus:outline-none bg-white-600/100 shadow-md"
              placeholder="Enter your Location here..."
              value={city}
              onChange={(e) => setCity(e.target.value)}
              onKeyDownCapture={searchCity}
            />
          </div>
          <Weather weatherData={data} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;

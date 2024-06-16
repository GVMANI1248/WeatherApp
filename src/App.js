import "./App.css";
import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Search from "./components/Search";
import WeatherDetails from "./components/WeatherDetails";
import WeatherTable from "./components/WeatherTable";
import MajorCitiesWeather from "./components/MajorCitiesWeather";

const api = {
  key: "78a13dd52dbfef371ac8c95a7e13d039",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});
  const [error, setError] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const getCurrentDateTime = () => {
    const now = new Date();
    return now.toLocaleString();
  };

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        if (result.cod !== 200) {
          setError(result.message);
          setWeather({});
        } else {
          setWeather(result);
          setError("");
          setShowDetails(false);
        }
      })
      .catch(() => {
        setError("Failed to fetch weather data.");
      });
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "light-mode";
  }, [darkMode]);

  return (
    <div className={`App ${darkMode ? "dark-mode" : "light-mode"}`}>
      <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <header className="App-header">
        <Search setSearch={setSearch} searchPressed={searchPressed} />

        {error && <p className="error">{error}</p>}

        {typeof weather.main !== "undefined" && (
          <>
            <WeatherDetails weather={weather} getCurrentDateTime={getCurrentDateTime} />
            <button onClick={toggleDetails} className="details-button">
              {showDetails ? "Hide Details" : "More Details..."}
            </button>
            {showDetails && <WeatherTable weather={weather} />}
          </>
        )}

        <MajorCitiesWeather api={api} />
      </header>
    </div>
  );
}

export default App;


// import "./App.css";
// import { useState, useEffect } from "react";
// import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";

// const api = {
//   key: "78a13dd52dbfef371ac8c95a7e13d039",
//   base: "https://api.openweathermap.org/data/2.5/",
// };

// function App() {
//   const [search, setSearch] = useState("");
//   const [weather, setWeather] = useState({});
//   const [error, setError] = useState("");
//   const [darkMode, setDarkMode] = useState(false);
//   const [showDetails, setShowDetails] = useState(false);

//   const getCurrentDateTime = () => {
//     const now = new Date();
//     return now.toLocaleString();
//   };

//   const searchPressed = () => {
//     fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
//       .then((res) => res.json())
//       .then((result) => {
//         if (result.cod !== 200) {
//           setError(result.message);
//           setWeather({});
//         } else {
//           setWeather(result);
//           setError("");
//           setShowDetails(false);
//         }
//       })
//       .catch(() => {
//         setError("Failed to fetch weather data.");
//       });
//   };

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//   };

//   const toggleDetails = () => {
//     setShowDetails(!showDetails);
//   };

//   useEffect(() => {
//     document.body.className = darkMode ? "dark-mode" : "light-mode";
//   }, [darkMode]);

//   return (
//     <div className={`App ${darkMode ? "dark-mode" : "light-mode"}`}>
//       <nav className="nav-container">
//         <h1>Weather App</h1>
//         <div>
//           <button onClick={toggleDarkMode} className={`toggle-button ${darkMode ? "button1" : "button2"}`}>
//             {!darkMode ? <MdDarkMode /> : <MdOutlineDarkMode />}
//           </button>
//         </div>
//       </nav>
//       <header className="App-header">
//         <div className="search-container">
//           <input
//             type="text"
//             placeholder="Enter city/town..."
//             onChange={(e) => setSearch(e.target.value)}
//           />
//           <button onClick={searchPressed}>Search</button>
//         </div>

//         {error && <p className="error">{error}</p>}

//         {typeof weather.main !== "undefined" ? (
//           <>
//             <div className="weather-container">
//               <div className="container">
//                 <h1>Location</h1>
//                 <p>{weather.name}, {weather.sys.country}</p>
//               </div>
//               <div className="container">
//                 <h1>Temperature Celsius</h1>
//                 <p>{weather.main.temp}°C</p>
//               </div>
//               <div className="container">
//                 <h1>Condition</h1>
//                 <p>{weather.weather[0].main}</p>
//               </div>
//               <div className="container">
//                 <h1>Description</h1>
//                 <p>{weather.weather[0].description}</p>
//               </div>
//               <div className="container">
//                 <h1>Humidity</h1>
//                 <p>{weather.main.humidity}%</p>
//               </div>
//               <div className="container">
//                 <h1>Wind Speed</h1>
//                 <p>{weather.wind.speed} m/s</p>
//               </div>
//               <div className="container">
//                 <h1>Date and Time</h1>
//                 <p>{getCurrentDateTime()}</p>
//               </div>
//             </div>
//             <button onClick={toggleDetails} className="details-button">
//               {showDetails ? "Hide Details" : "More Details..."}
//             </button>
//             {showDetails && (
//               <table className="details-table">
//                 <tbody>
//                   <tr>
//                     <td>Pressure</td>
//                     <td>{weather.main.pressure} hPa</td>
//                   </tr>
//                   <tr>
//                     <td>Sea Level</td>
//                     <td>{weather.main.sea_level} hPa</td>
//                   </tr>
//                   <tr>
//                     <td>Ground Level</td>
//                     <td>{weather.main.grnd_level} hPa</td>
//                   </tr>
//                   <tr>
//                     <td>Visibility</td>
//                     <td>{weather.visibility} m</td>
//                   </tr>
//                   <tr>
//                     <td>Wind Gust</td>
//                     <td>{weather.wind.gust} m/s</td>
//                   </tr>
//                   <tr>
//                     <td>Sunrise</td>
//                     <td>{new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}</td>
//                   </tr>
//                   <tr>
//                     <td>Sunset</td>
//                     <td>{new Date(weather.sys.sunset * 1000).toLocaleTimeString()}</td>
//                   </tr>
//                 </tbody>
//               </table>
//             )}
//           </>
//         ) : ""}
//       </header>
//     </div>
//   );
// }

// export default App;

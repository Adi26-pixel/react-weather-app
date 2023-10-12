import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by Adeline and is{" "}
          <a
            href="https://github.com/Adi26-pixel/react-weather-app.git"
            target="_blank"
            rel="noreferrer">
            open-sourced on github
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;

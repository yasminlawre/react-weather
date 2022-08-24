import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.css";
import "./app.css";

export default function App() {
  return (
    <div className="app">
      <div className="container">
        <Weather defaultCity="London" />
        <footer>
          This project was coded by Yasmin and is{" "}
          <a
            href="https://github.com/yasminlawre/react-weather"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://fluffy-snickerdoodle-70598d.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

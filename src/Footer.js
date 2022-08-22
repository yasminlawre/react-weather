import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer mt-5">
      <footer>
        {" "}
        This project was coded by Yasmin and is{" "}
        <a
          href="https://github.com/yasminlawre/react-weather"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a
          href="https://fluffy-snickerdoodle-70598d.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}

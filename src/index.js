import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import MainComponent from "./components/maincpomponent/MainComponent";
import "./index.css";
import "fontawesome-4.7/css/font-awesome.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MainComponent />
  </React.StrictMode>
);

reportWebVitals();

import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

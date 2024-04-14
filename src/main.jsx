import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./style/index.scss";
import "./style/global.scss";
import "./style/header.scss";
import "./style/banner.scss";
import "./style/miniBlogCard.scss";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
 </BrowserRouter> 
);

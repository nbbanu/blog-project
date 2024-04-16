import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./style/index.scss";
import "./style/global.scss";
import "./components/common/Header/header.scss";
import "./components/common/Banner/banner.scss";
import "./components/common/Trending/trending.scss";
import "./components/common/MiniBlogCard/miniBlogCard.scss";
import "./components/common/AuthModal/authModal.scss";
import "./components/common/Modal/modal.scss";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
 </BrowserRouter> 
);

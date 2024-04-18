import "./App.css";
import Home from "./pages/Home";
import Header from "./components/common/Header";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
      </Routes>

    </div>
  );
}

export default App;

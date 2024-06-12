import "./App.css";
import Home from "./pages/Home";
import Header from "./components/common/Header";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import AuthProvider from "./contexts/AuthContext";
import LangProvider from "./contexts/LangContext";
import WritePage from "./pages/Write";
import CreateBlogProvider from "./contexts/CreateBlogContext";
import ProfilePage from "./pages/Profile";


function App() {

  return (
    <div>
      {/* Provider component’imizin diğer componentler tarafında erişilebilir olmasını sağlayabilmek için component ağacımızın en üstüne yerleştirmemiz gerekir. */}
      <LangProvider>
        <AuthProvider>
          <CreateBlogProvider>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="new-story" element={<WritePage />} />
              <Route path="/:userName" element={<ProfilePage/>} />
            </Routes>
          </CreateBlogProvider>
        </AuthProvider>
      </LangProvider>
    </div>
  );
}

export default App;

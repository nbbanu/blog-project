import "./App.css";
import Home from "./pages/Home";
import Header from "./components/common/Header";
import { Route, Routes } from "react-router-dom";
import AuthProvider from "./contexts/AuthContext";
import LangProvider from "./contexts/LangContext";
import WritePage from "./pages/Write";
import CreateBlogProvider from "./contexts/CreateBlogContext";
import ProfilePage from "./pages/Profile";
import Lists from "./pages/Profile/paths/Lists";
import ProfilePageAbout from "./pages/Profile/paths/ProfilePageAbout";
import ProfilePageHome from "./pages/Profile/paths/ProfilePageHome";
import Topics from "./pages/Topics";
import Search from "./pages/Search";


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
              <Route path="new-story" element={<WritePage />} />
              <Route path="/:userName" element={<ProfilePage/>}>                
                <Route path="main" element={<ProfilePageHome/>}/>
                <Route path="lists" element={<Lists/>}/>
                <Route path="about" element={<ProfilePageAbout/>}/>
              </Route>
              <Route path="explore-topics" element={<Topics/>}/>
              <Route path="search" element={<Search/>}/>
            </Routes>
          </CreateBlogProvider>
        </AuthProvider>
      </LangProvider>
    </div>
  );
}

export default App;

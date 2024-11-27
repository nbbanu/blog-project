import "./App.css";
import Home from "./pages/Home";
import Header from "./components/common/Header";
import { Route, Routes } from "react-router-dom";
import AuthProvider from "./contexts/AuthContext";
import LangProvider from "./contexts/LangContext";
import WritePage from "./pages/Write";
import CreateBlogProvider from "./contexts/CreateBlogContext";
import ProfilePageAbout from "./pages/Profile/tabs/ProfilePageAbout";
import ProfilePageHome from "./pages/Profile/tabs/ProfilePageHome";
import Topics from "./pages/Topics";
import Search from "./pages/Search";
import Admin from "./pages/Admin";
import CategoriesPage from "./pages/Admin/CategoriesPage";
import HomePage from "./pages/Admin/HomePage";
import BlogDetailPage from "./pages/BlogDetail";
import ReadingListPage from "./pages/Profile/tabs/Lists/ReadingListPage";
import MyLists from "./pages/Profile/tabs/Lists/MyLists";
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
              <Route path="/" element={<Home />}></Route>
              <Route path="new-story" element={<WritePage />} />
              <Route path="/:userName" element={<ProfilePage/>}>
                <Route path="main" element={<ProfilePageHome />} />
                <Route path="lists" element={<MyLists />} />
                <Route path="about" element={<ProfilePageAbout />} />
                <Route path="list/:listId" element={<ReadingListPage />} />
              </Route>

              <Route path="explore-topics" element={<Topics />} />
              <Route path="search" element={<Search />} />
              <Route path="admin" element={<Admin />}>
                <Route path="" element={<HomePage />} />
                <Route path="categories" element={<CategoriesPage />} />
              </Route>
              <Route
                path="detail/:blogTitle/:id"
                element={<BlogDetailPage />}
              />
            </Routes>
          </CreateBlogProvider>
        </AuthProvider>
      </LangProvider>
    </div>
  );
}

export default App;

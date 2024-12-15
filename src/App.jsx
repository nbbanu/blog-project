import "./App.css";
import Home from "./pages/Home";
import Header from "./components/common/Header";
import { Route, Routes, useLocation } from "react-router-dom";
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
import TopicDetailPage from "./pages/Topics/TopicDetailPage";
import { useEffect } from "react";
import dayjs from "dayjs";
import "dayjs/locale/tr";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

dayjs.locale("tr-TR");

function App() {
  const location = useLocation();

  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, [location]);

  return (
    <div>
      {/* Provider component’imizin diğer componentler tarafında erişilebilir olmasını sağlayabilmek için component ağacımızın en üstüne yerleştirmemiz gerekir. */}

      <AuthProvider>
        <CreateBlogProvider>
          <Header />

          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="new-story" element={<WritePage />} />
            <Route path="/:userName/:userId" element={<ProfilePage />}>
              <Route path="main" element={<ProfilePageHome />} />
              <Route path="lists" element={<MyLists />} />
              <Route path="about" element={<ProfilePageAbout />} />
              <Route path="list/:listId" element={<ReadingListPage />} />
            </Route>

            <Route path="explore-topics" element={<Topics />}>
              <Route path="title" element={<TopicDetailPage />} />
            </Route>
            <Route path="search" element={<Search />} />
            <Route path="admin" element={<Admin />}>
              <Route path="" element={<HomePage />} />
              <Route path="categories" element={<CategoriesPage />} />
            </Route>
            <Route path="detail/:id" element={<BlogDetailPage />} />
          </Routes>
          <ToastContainer />
        </CreateBlogProvider>
      </AuthProvider>
    </div>
  );
}

export default App;

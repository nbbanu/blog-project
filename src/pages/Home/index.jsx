import { Link, useNavigate } from "react-router-dom";
import Banner from "../../components/common/Banner";
import BlogCard from "../../components/common/BlogCard";
import FollowPersonCard from "../../components/common/FollowPersonCard";
import Footer from "../../components/common/Footer";
import HorizantalScrobbleBar from "../../components/common/HorizantalScrobbleBar";
import StaffPicksCard from "../../components/common/StaffPicksCard";
import Trending from "../../components/common/Trending";
import { useAuth } from "../../contexts/AuthContext";
import { useEffect, useState } from "react";
import { getAllBlogs } from "../../service";
import MiniBlogCard from "../../components/common/MiniBlogCard";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import dayjs from "dayjs";
import Test from "./Test";

const Home = () => {
  useEffect(() => {
    loadAllBlogsToUI();
  }, []);

  const [blogs, setBlogs] = useState([]);
  const loadAllBlogsToUI = async () => {
    const data = await getAllBlogs();
    setBlogs(data);
  };

  const { email } = useAuth();
  const userEmail = "@" + email?.split("@")[0];
  const { token } = useAuth();
  const navigate = useNavigate();

  const openBlogDetail = (blogTitle, blogId) => {
    navigate(`detail/${blogTitle}/${blogId}`);
  };

  const openBloggerProfile = () => {
    navigate(`/${userEmail}/main`);
  };
  if (token) {
    return (
      <div className=" loggedin-home">
        <div className="container">
          <div className="flex loggedin-home-container">
            <div className="loggedin-home-left">
              <HorizantalScrobbleBar />
              {blogs.length === 0
                ? [1, 2, 3, 4, 5].map((item) => (
                    <div
                      key={item}
                      className="flex flex-between"
                      style={{ marginBottom: 25, marginTop: 50 }}
                    >
                      <div style={{ width: "100%" }}>
                        <div
                          className="flex flex-center"
                          style={{ marginBottom: 15 }}
                        >
                          <Skeleton circle width={24} height={24} />
                          <Skeleton width={100} style={{ marginLeft: 7 }} />
                          <Skeleton width={100} style={{ marginLeft: 7 }} />
                        </div>
                        <div>
                          <Skeleton width={200} style={{ marginBottom: 10 }} />
                          <Skeleton width={300} />
                          <Skeleton width={300} />
                        </div>
                        <div
                          className="bottom flex"
                          style={{ marginTop: 15, alignItems: "flex-end" }}
                        >
                          <Skeleton width={80} height={25} borderRadius={25} />
                          <Skeleton width={70} style={{ marginLeft: 15 }} />
                        </div>
                      </div>
                      <div className="right" style={{ alignSelf: "flex-end" }}>
                        <div
                          className="flex"
                          style={{ marginRight: 15, alignItems: "flex-end" }}
                        >
                          <Skeleton
                            width={25}
                            height={25}
                            style={{ marginRight: 10 }}
                          />
                          <Skeleton
                            width={25}
                            height={25}
                            style={{ marginRight: 10 }}
                            borderRadius={"50%"}
                          />
                          <Skeleton
                            width={25}
                            height={25}
                            style={{ marginRight: 25 }}
                          />
                          <Skeleton width={120} height={120} />
                        </div>
                      </div>
                    </div>
                  ))
                : blogs.map((blog) => (
                    <BlogCard
                      key={blog.id}
                      bloggerName={blog.user.name}
                      title={blog.title}
                      infoText={blog.description}
                      releaseDate={dayjs(blog.created_at).format(
                        "MMM DD, YYYY"
                      )}
                      profileImg="https://miro.medium.com/v2/resize:fill:40:40/0*PVc8ycK2VwtFt7R0"
                      blogImage={blog.image}
                      categoryLink={"Micro Frontends"}
                      dot={<span className="dot light-text"></span>}
                      readingTime={"4 min read"}
                      minusIcon={
                        <i className="fa-solid fa-minus minus light-text flex flex-center-center"></i>
                      }
                      openBlogDetail={() => openBlogDetail(blog.title, blog.id)}
                      openBloggerProfile={openBloggerProfile}
                    />
                  ))}
            </div>
            <div className="vertical-line"></div>
            <div className="loggedin-home-right">
              <div>
                <h2 className="loggedin-home-right-title primary-text fs-16">
                  Personel Seçimleri
                </h2>
                <div className="staff-picks-cards flex flex-column">
                  {blogs.slice(0, 3).map((blog) => (
                    <StaffPicksCard
                      key={blog.id}
                      profileImg={
                        "https://miro.medium.com/v2/resize:fill:40:40/1*i5p9qg4BGA4i2NXsghlnxQ.png"
                      }
                      bloggerName={blog.user.name}
                      publishedBy={"Middle-Pause"}
                      title={blog.title}
                      openBlogDetail={() => openBlogDetail(blog.title, blog.id)}
                      openBloggerProfile={openBloggerProfile}
                    />
                  ))}
                </div>
                <Link className="green-text link">Tüm Listeyi Görün</Link>
              </div>
              <div className="sticky">
                <div className="recommended-topics">
                  <h2 className="loggedin-home-right-title primary-text fs-16">
                    Önerilen Konular
                  </h2>
                  <div className="recommended-topics-links">
                    <Link className="link gray-link">React</Link>
                    <Link className="link gray-link">Education</Link>
                    <Link className="link gray-link">Culture</Link>
                    <Link className="link gray-link">Blockhain</Link>
                    <Link className="link gray-link">UX</Link>
                    <Link className="link gray-link">
                      Artificial Intelligence
                    </Link>
                  </div>
                  <Link to="explore-topics" className="green-text link">
                    Daha Fazla Konu Görün
                  </Link>
                </div>
                <div className="recommended-authors flex flex-column">
                  <h2 className="loggedin-home-right-title primary-text fs-16">
                    Kimi Takip Etmeli
                  </h2>
                  <FollowPersonCard
                    profieImg={
                      "https://miro.medium.com/v2/resize:fill:40:40/1*i5p9qg4BGA4i2NXsghlnxQ.png"
                    }
                    bloggerName={"Will Locket"}
                    bloggerInfo={
                      "Independent journalist covering global politics, climate change and technology. Get articles early at www.planetearthandbeyond.co"
                    }
                  />
                  <FollowPersonCard
                    profieImg={
                      "https://miro.medium.com/v2/resize:fill:40:40/1*i5p9qg4BGA4i2NXsghlnxQ.png"
                    }
                    bloggerName={"Will Locket"}
                    bloggerInfo={
                      "Independent journalist covering global politics, climate change and technology. Get articles early at www.planetearthandbeyond.co"
                    }
                  />
                  <FollowPersonCard
                    profieImg={
                      "https://miro.medium.com/v2/resize:fill:40:40/1*i5p9qg4BGA4i2NXsghlnxQ.png"
                    }
                    bloggerName={"Will Locket"}
                    bloggerInfo={
                      "Independent journalist covering global politics, climate change and technology. Get articles early at www.planetearthandbeyond.co"
                    }
                  />
                  <Link className="green-text link">
                    Daha Fazla Öneri Görün
                  </Link>
                </div>
                <div className="recently-saved">
                  <h2 className="loggedin-home-right-title primary-text fs-16">
                    Son Kaydedilenler
                  </h2>
                  <div className="staff-picks-cards flex flex-column">
                    {blogs.slice(0, 4).map((blog) => (
                      <StaffPicksCard
                        key={blog.id}
                        profileImg={
                          "https://miro.medium.com/v2/resize:fill:40:40/1*i5p9qg4BGA4i2NXsghlnxQ.png"
                        }
                        bloggerName={blog.user.name}
                        publishedBy={"Middle-Pause"}
                        title={blog.title}
                        openBlogDetail={() =>
                          openBlogDetail(blog.title, blog.id)
                        }
                        openBloggerProfile={openBloggerProfile}
                      />
                    ))}
                  </div>

                  <Link to={`/${userEmail}/lists`} className="green-text link">
                    Daha Fazla Kaydedilenler Görün
                  </Link>
                </div>
                <div className="reading-list">
                  <h2 className="loggedin-home-right-title primary-text fs-16">
                    Okuma Listesi
                  </h2>
                  <p className="reading-list-text fs-14 light-text">
                    Herhangi bir hikayenin üzerine
                    <i
                      className="fa-regular fa-bookmark light-text fs-20"
                      style={{ marginRight: 10, marginLeft: 10 }}
                    ></i>
                    tıklayarak onu kolayca okuma listenize ekleyebilir veya
                    paylaşabileceğiniz özel bir liste oluşturabilirsiniz.
                  </p>
                </div>
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <main className="home">
      <Banner />
      <Trending />
      <div className="light-line"></div>
      <div className="home-bottom container">
        <div className="home-bottom-left">
          {blogs.map((blog) => (
            <MiniBlogCard
              key={blog.id}
              bloggerName={blog.user.name}
              title={blog.title}
              description={blog.description}
              releaseDate={dayjs(blog.created_at).format("MMM DD, YYYY")}
              profileImg="https://miro.medium.com/v2/resize:fill:40:40/0*PVc8ycK2VwtFt7R0"
              miniCardImg={
                <img
                  src={blog.image}
                  alt=""
                  className="mini-blogcard-img"
                  style={{ width: 200, height: 134 }}
                />
              }
              readingTime={"4 min read"}
            />
          ))}
        </div>

        <div className="home-bottom-right">
          <div className="recommended-topics">
            <h2 className="home-bottom-right-title primary-text fs-16">
              Daha Fazlasını Keşfedin
            </h2>
            <div className="recommended-topics-links">
              <Link className="link gray-link">React</Link>
              <Link className="link gray-link">Education</Link>
              <Link className="link gray-link">Culture</Link>
              <Link className="link gray-link">Blockhain</Link>
              <Link className="link gray-link">UX</Link>
              <Link className="link gray-link">Artificial Intelligence</Link>
            </div>
            <Link to="explore-topics" className="green-text link">
              Daha Fazla Konu Görün
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;

import { Link } from "react-router-dom";
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

const Home = () => {
  useEffect(() => {
    loadAllBlogsToUI();
  }, []);

  const [showAllBlogs, setShowAllBlogs] = useState([]);
  const loadAllBlogsToUI = async () => {
    const data = await getAllBlogs();
    setShowAllBlogs(data);
  };
  const { token } = useAuth();
  if (token) {
    return (
      <div className=" loggedin-home">
        <div className="container flex">
          <div className="loggedin-home-left">
            <HorizantalScrobbleBar />
            {showAllBlogs.map((blog) => (
              <BlogCard
                key={blog.id}
                bloggerName={blog.user.name}
                title={blog.title}
                infoText={blog.description}
                releaseDate={blog.created_at.slice(0, 10)}
                profileImg="https://miro.medium.com/v2/resize:fill:40:40/0*PVc8ycK2VwtFt7R0"
                blogImage={blog.image}
                categoryLink={"Micro Frontends"}
                dot={<span className="dot light-text"></span>}
                readingTime={"4 min read"}
                minusIcon={
                  <i className="fa-solid fa-minus minus light-text flex flex-center-center"></i>
                }
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
                {Array.from({ length: 3 }).map((index) => (
                  <StaffPicksCard
                    key={index}
                    profileImg={
                      "https://miro.medium.com/v2/resize:fill:40:40/1*i5p9qg4BGA4i2NXsghlnxQ.png"
                    }
                    bloggerName={"Renan Olovics"}
                    publishedBy={"Middle-Pause"}
                    title={
                      "My 25-Year Career in Web Design Through the Eyes of the Wayback Machine"
                    }
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
                <Link to="explore-topics" className="green-text link">Daha Fazla Konu Görün</Link>
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
                <Link className="green-text link">Daha Fazla Öneri Görün</Link>
              </div>
              <div className="reading-list">
                <h2 className="loggedin-home-right-title primary-text fs-16">
                  Okuma Listesi
                </h2>
                <p className="reading-list-text fs-14 light-text">
                  Click the
                  <i
                    className="fa-regular fa-bookmark light-text fs-20"
                    style={{ marginRight: 10, marginLeft: 10 }}
                  ></i>
                  on any story to easily add it to your reading list or a custom
                  list that you can share.
                </p>
              </div>
              <Footer />
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
          {showAllBlogs.map((blog) => (
            <MiniBlogCard
              key={blog.id}
              bloggerName={blog.user.name}
              title={blog.title}
              infoText={blog.description}
              releaseDate={blog.created_at.slice(0, 10)}
              profileImg="https://miro.medium.com/v2/resize:fill:40:40/0*PVc8ycK2VwtFt7R0"
              blogImage={blog.image}
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
            <Link to="explore-topics" className="green-text link">Daha Fazla Konu Görün</Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;

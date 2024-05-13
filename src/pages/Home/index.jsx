import Banner from "../../components/common/Banner";
import BlogCard from "../../components/common/BlogCard";
import FollowPersonCard from "../../components/common/FollowPersonCard";
import Footer from "../../components/common/Footer";
import HorizantalScrobbleBar from "../../components/common/HorizantalScrobbleBar";
import StaffPicksCard from "../../components/common/StaffPicksCard";
import Trending from "../../components/common/Trending";
import { useAuth } from "../../contexts/AuthContext";

const Home = () => {
  const { token } = useAuth();
  if (token) {
    return (
      <div className=" loggedin-home">
        <div className="container flex">
          <div className="loggedin-home-left">
            <HorizantalScrobbleBar />
            {Array.from({ length: 30 }).map((index) => (
              <BlogCard
                key={index}
                bloggerName={"Renan Olovics"}
                releaseDate={"Nov 9, 2023"}
                title={"10 Best Practices in Front-end Development (React)"}
                infoText={
                  "Certainly, we’ve all experienced this situation: you land a new job and are excited to start. The interviewers paint a bright and charming picture of the company, leading you to make the Certainly, we’ve all experienced this situation: you land a new job and are excited to start. The interviewers paint a bright and charming picture of the company, leading you to make the decision to leave your"
                }
                profileImg={
                  "https://miro.medium.com/v2/resize:fill:40:40/1*i5p9qg4BGA4i2NXsghlnxQ.png"
                }
                categoryLink={"Micro Frontends"}
                readingTime={"4 min read"}
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
              <a href="#" className="green-text link">
                Tüm Listeyi Görün
              </a>
            </div>
            <div className="sticky">
              <div className="recommended-topics">
                <h2 className="loggedin-home-right-title primary-text fs-16">
                  Önerilen Konular
                </h2>
                <div className="recommended-topics-links">
                  <a href="#" className="link gray-link">
                    React
                  </a>
                  <a href="#" className="link gray-link">
                    Education
                  </a>
                  <a href="#" className="link gray-link">
                    Culture
                  </a>
                  <a href="#" className="link gray-link">
                    Blockhain
                  </a>
                  <a href="#" className="link gray-link">
                    UX
                  </a>
                  <a href="#" className="link gray-link">
                    Artificial Intelligence
                  </a>
                </div>
                <a href="#" className="green-text link">
                  Daha Fazla Konu Görün
                </a>
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
                <a href="#" className="green-text link">
                  Daha Fazla Öneri Görün
                </a>
              </div>
              <div className="reading-list">
                <h2 className="loggedin-home-right-title primary-text fs-16">
                  Okuma Listesi
                </h2>
                <p className="reading-list-text fs-14 light-text">
                  Click the
                  <i className="fa-regular fa-bookmark light-text fs-20" style={{marginRight:10, marginLeft:10}}></i>
                  on any story to easily add it to your reading list or a custom
                  list that you can share.
                </p>
              </div>
              <Footer/>
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
      {/* <BlogCard/> */}
    </main>
  );
};

export default Home;

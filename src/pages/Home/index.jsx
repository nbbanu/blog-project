import Banner from "../../components/common/Banner";
import MiniBlogCard from "../../components/common/MiniBlogCard";

const Home = () => {
  return (
    <div>
      <Banner />
      <MiniBlogCard bloggerName={"Srijanie Dey"} publishedBy={"Towards Data Science"} title={"Deep Dive into Transformers by Hand ✍︎"} releaseDate={"Apr 12, 2024"} 
/>
    </div>
  );
};

export default Home;

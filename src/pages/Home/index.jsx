import Banner from "../../components/common/Banner";
import BlogCard from "../../components/common/BlogCard";
import Trending from "../../components/common/Trending";

const Home = () => {
    return( 
    <main className="home">
        <Banner/>
        <Trending/>
        <div className="light-line"></div>
        {/* <BlogCard/> */}
    </main>)
}

export default Home;
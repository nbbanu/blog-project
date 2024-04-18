import MiniBlogCard from "../MiniBlogCard";

const Trending = () => {
  return (
    <section id="trending" className="trending">
      <div className="container">
        <div className="trending-header flex flex-center">
          <img
            src="trend-graph.png"
            alt="trend-graphics"
            style={{ width: "20px", height: "20px", objectFit: "cover" }}
          />
          <h2 className="trending-header-h2 fs-16 primary-text">
            Trending on Medium
          </h2>
        </div>
        <div className="mini-blog-cards">
          <MiniBlogCard
            bloggerName={"Srijanie Deydjaslkdjal"}
            publishedBy={"Towards Data Science"}
            title={"Deep Dive into Transformers by Hand ✍︎"}
            releaseDate={"Apr 12, 2024"}
            readingTime={"8 min read"}
          />
           <MiniBlogCard
            bloggerName={"Srijanie Dey"}
            publishedBy={"Towards Data Science"}
            title={"Deep Dive into Transformers by Hand ✍︎"}
            releaseDate={"Apr 12, 2024"}
            readingTime={"8 min read"}
          />
           <MiniBlogCard
            bloggerName={"Srijanie Dey"}
            publishedBy={"Towards Data Science"}
            title={"Deep Dive into Transformers by Hand ✍︎"}
            releaseDate={"Apr 12, 2024"}
            readingTime={"8 min read"}
          />
           <MiniBlogCard
            bloggerName={"Srijanie Dey"}
            publishedBy={"Towards Data Science"}
            title={"Deep Dive into Transformers by Hand ✍︎"}
            releaseDate={"Apr 12, 2024"}
            readingTime={"8 min read"}
          />
        </div>
      </div>
    </section>
  );
};

export default Trending;

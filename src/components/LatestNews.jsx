import React from "react";
import NewsCard from "./NewsCard";
const LatestNews = ({ newsData }) => {
  const newsFeed = newsData.slice(0, 12).map((newsCard, index) => {
    return (
      <NewsCard
        key={index}
        date={newsCard.publishedAt}
        author={newsCard.author}
        des={newsCard.description}
        title={newsCard.title}
        image={newsCard.urlToImage}
        url={newsCard.url}
      />
    );
  });

  return (
    <div className="container design-gap">
      <div className="row">
        <div className="col">
          <div className="head-sec">
            <h3>Latest News</h3>
            <a href="#" className="link-style">
              See all
            </a>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="items-design">{newsFeed}</div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;

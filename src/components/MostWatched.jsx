import React from "react";
import TitleCard from "./TitleCard";

const MostWatched = ({ newsData }) => {
  const newsTitle = newsData.slice(0, 3).map((newsDetail, index) => {
    return <TitleCard key={index} title={newsDetail.title} />;
  });
  return (
    <div>
      <div className="container design-gap">
        <div className="row">
          <div className="col">
            <div className="head-sec">
              <h3>Most Watched</h3>
              <a href="#" className="link-style">
                See all
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col title-style">{newsTitle}</div>
        </div>
      </div>
    </div>
  );
};

export default MostWatched;

import React, { useState } from "react";

const TopStory = ({ newsData }) => {
  const [randomStory, setRandomStory] = useState(
    newsData[Math.floor(Math.random() * newsData.length)]
  );
  return (
    <div>
      <div className="container design-gap">
        <div className="row">
          <div className="col">
            <div className="head-sec">
              <h3>Full Story</h3>
              <a href="#" className="link-style">
                See all
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-5">
            <img src={randomStory.urlToImage} className="top-story-image" />
          </div>
          <div className="col-7">
            <h3>{randomStory.title}</h3>
            <p className="author-name-style">{randomStory.author}</p>
            <p>{randomStory.description}</p>
            <button className="btn btn-style" onClick={randomStory.url}>
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopStory;

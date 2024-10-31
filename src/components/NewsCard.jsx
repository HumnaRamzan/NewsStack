import React from "react";

const NewsCard = (props) => {
  return (
    <div>
      <div className="card news-item">
        <img src={props.image} className="card-img-top " alt="..." />
        <div className="card-body">
          <div className="card-head">
            <p>{props.author}</p>
            <span>{props.date.split("T")[0]}</span>
          </div>
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.des}</p>
          <a href={props.url} className="btn btn-style">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

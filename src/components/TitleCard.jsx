import React, { useState } from "react";

const TitleCard = (props) => {
  return (
    <div className="col-4">
      <div className="title-style bullet">
        <span className="title-text">{props.title}</span>
      </div>
    </div>
  );
};

export default TitleCard;

import React from "react";
import "./Description.css";

const Description = () => {
  return (
    <div className="description">
      <div className="description-navigator">
        <div className="description-nav-box">Description</div>
        <div className="description-nav-box fade">Reviews (89)</div>
      </div>
      <div className="description-descriptions">
        <p>
          Any web or media designer knows the lorem ipsum dummy text when it
          comes to photoshopping layouts. This design makes a great birthday or
          Christmas gift idea for friends, colleagues, graphic design nerds,
          coders and web developers.
        </p>
        <p>
          This one goes out to the Lorem Ipsum Dolor Sit Happens design computer
          geeks who are in need of a humorous office or party gift.
        </p>
      </div>
    </div>
  );
};

export default Description;

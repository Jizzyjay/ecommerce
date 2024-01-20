import React from "react";
import "./Breadcrumbs.css";
import arrow from "../assets/breadcrum_arrow.png";

const Breadcrumbs = (props) => {
  const { product } = props;

  return (
    <div className="breadcrumbs">
      Home
      <img src={arrow} alt="" />
      Shop
      <img src={arrow} alt="" />
      {product.category}
      <img src={arrow} alt='' />
      {product.name}
    </div>
  );
};

export default Breadcrumbs;

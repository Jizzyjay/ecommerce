import React, { useEffect, useState } from "react";
import "./Popular.css";
import Item from "../Items/Item";

const Popular = () => {
  const [popularProduct, setPopularProduct] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/popularInWomen")
      .then((response) => response.json())
      .then((data) => setPopularProduct(data));
  }, []);

  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN'S SECTION</h1>
      <hr />
      <div className="popular-item">
        {popularProduct.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_prices={item.new_price}
              old_prices={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;

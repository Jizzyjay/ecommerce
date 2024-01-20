import React from "react";
import "./RelatedProduct.css";
import data_product from "../assets/data";
import Item from "../Items/Item";

const RelatedProduct = () => {
  return (
    <div className="relatedProduct">
      <h1>Related Products</h1>
      <hr />
      <div className="relatedProduct-item">
        {data_product.map((item, i) => {
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

export default RelatedProduct;

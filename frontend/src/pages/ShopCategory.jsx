import React, { useContext } from "react";
import "./Css/ShopCategory.css";
import { ShopContext } from "../context/ShopContext";
import dropdown from "../components/assets/dropdown_icon.png";
import Item from "../components/Items/Item";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="shop-category">
      <img className="shopCategory-banner" src={props.banner} alt="" />
      <div className="shopCategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopCategory-sort">
          Sort by
          <img src={dropdown} alt="dropdown" />
        </div>
      </div>
      <div className="shopCategory-products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
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
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopCategory-loadMore">Explore more</div>
    </div>
  );
};

export default ShopCategory;

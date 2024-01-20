import React, { useEffect, useState } from "react";
import "./NewCollection.css";
import Item from "../Items/Item";

const NewCollection = () => {
  const [new_collection, setNew_Collection] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/newCollection").then((response) =>
      response.json().then((data) => setNew_Collection(data))
    );
  }, []);

  return (
    <div className="new-collections">
      <h1>New Collections</h1>
      <hr />
      <div className="collections">
        {new_collection.map((item, i) => {
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

export default NewCollection;

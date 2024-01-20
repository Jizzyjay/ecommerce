// import React from 'react'
import { useState } from "react";
import "./ListProduct.css";
import { useEffect } from "react";
import cross from "../../assets/cross_icon.png";

const ListProduct = () => {
  const [allProduct, setAllProduct] = useState([]);

  const fetchInfo = async () => {
    await fetch("http://localhost:4000/allProduct")
      .then((resp) => resp.json())
      .then((data) => {
        setAllProduct(data);
      });
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const removeProduct = async (id) => {
    await fetch("http://localhost:4000/removeProduct", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    });
    await fetchInfo();
  };

  return (
    <div className="listProduct">
      <h1>All Product List</h1>
      <div className="listProduct-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listProduct-allProduct">
        <hr />
        {allProduct.map((product, index) => {
          return (
            <>
              <div
                key={index}
                className="listProduct-format-main listProduct-format"
              >
                <img
                  className="listProduct-product-icon"
                  src={product.image}
                  alt={product.name}
                />
                <p>{product.name}</p>
                <p>${product.old_price}</p>
                <p>${product.new_price}</p>
                <p>{product.category}</p>
                <img
                  onClick={() => {
                    removeProduct(product.id);
                  }}
                  className="listProduct-remove-icon"
                  src={cross}
                  alt=""
                />
              </div>
              <hr />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ListProduct;

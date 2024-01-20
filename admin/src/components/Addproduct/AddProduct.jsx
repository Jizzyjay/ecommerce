// import React from 'react'
import "./AddProduct.css";
import upload from "../../assets/upload_area.svg";
import { useState } from "react";

const AddProduct = () => {
  const [image, setImage] = useState(false);
  const [productDetail, setProductDetail] = useState({
    name: "",
    image: "",
    category: "women",
    old_price: "",
    new_price: "",
  });

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const changeDetailHandler = (e) => {
    setProductDetail({ ...productDetail, [e.target.name]: e.target.value });
  };

  const AddProductHandler = async () => {
    console.log(productDetail);
    let responseData;
    let product = productDetail;

    let formData = new FormData();
    formData.append("product", image);

    await fetch("http://localhost:4000/upload", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    })
      .then((resp) => resp.json())
      .then((data) => {
        responseData = data;
      });
    if (responseData.success) {
      product.image = responseData.image_url;
      console.log("product saved successfully", product);

      await fetch("http://localhost:4000/addProduct", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify(product),
      })
        .then((resp) => resp.json())
        .then((data) => {
          data.success
            ? alert("Product added successfully")
            : alert("Failed to add product");
        });
    }
  };

  return (
    <div className="addProduct">
      <div className="addProduct-itemField">
        <p>Product title</p>
        <input
          value={productDetail.name}
          onChange={changeDetailHandler}
          type="text"
          name="name"
          placeholder="Type here"
        />
      </div>
      <div className="addProduct-price">
        <div className="addProduct-itemField">
          <p>Price</p>
          <input
            value={productDetail.old_price}
            onChange={changeDetailHandler}
            type="text"
            name="old_price"
            placeholder="Type here"
          />
        </div>
        <div className="addProduct-itemField">
          <p>Offer Price</p>
          <input
            value={productDetail.new_price}
            onChange={changeDetailHandler}
            type="text"
            name="new_price"
            placeholder="Type here"
          />
        </div>
      </div>
      <div className="addProduct-itemField">
        <p>Product Category</p>
        <select
          value={productDetail.category}
          onChange={changeDetailHandler}
          name="category"
          className="addProduct-selector"
        >
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="kid">Kid</option>
        </select>
      </div>
      <div className="addProduct-itemField">
        <label htmlFor="file-input">
          <img
            src={image ? URL.createObjectURL(image) : upload}
            alt="upload"
            className="addProduct-thumbnail"
          />
        </label>
        <input
          onChange={imageHandler}
          type="file"
          name="image"
          id="file-input"
          hidden
        />
      </div>
      <button onClick={() => AddProductHandler()} className="addProduct-btn">
        Add
      </button>
    </div>
  );
};

export default AddProduct;

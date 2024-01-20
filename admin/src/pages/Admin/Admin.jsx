// import React from 'react'
import AddProduct from "../../components/Addproduct/AddProduct";
import ListProduct from "../../components/ListProduct/ListProduct";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Admin.css";
import { Routes, Route } from "react-router-dom";

const Admin = () => {
  return (
    <div className="admin">
      <Sidebar />
      <Routes>
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/listProduct" element={<ListProduct />} />
      </Routes>
    </div>
  );
};

export default Admin;

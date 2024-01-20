import React from "react";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <h1>Get Exclusive Offers in your Email</h1>
      <p>Subscribe to our newsletter</p>
      <div>
        <input type="email" placeholder="Email address" />
        <button type="submit">Subscribe</button>
      </div>
    </div>
  );
};

export default Newsletter;

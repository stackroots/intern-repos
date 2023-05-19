import React from "react";
import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="logo">
          <h1>My App</h1>
        </div>
        <div className="items">
          <div>Home</div>
          <div>Students</div>
          <div>About us</div>
        </div>
      </div>
    </div>
  );
}

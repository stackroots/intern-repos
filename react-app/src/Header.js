import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="logo">
          <h1>My App</h1>
        </div>
        <div className="items">
          <Link className="link" to="/">Home</Link>
          <Link className="link" to="/add">Add Student</Link>
          <Link className="link" to="/about">About Us</Link>
        </div>
      </div>
    </div>
  );
}

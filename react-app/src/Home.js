import React from "react";
import "./home.css";
import Card from "./Card";

export default function Home({ students }) {
  return (
    <div className="home">
      <div className="container">
        {students.map((student) => {
          return <Card student={student} />;
        })}
      </div>
    </div>
  );
}

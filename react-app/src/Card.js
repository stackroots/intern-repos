import React from "react";
import "./card.css";

export default function Card({ student }) {
  return (
    <div className="card">
      <div className="contents">
        <h2>{student.fullname}</h2>
        <h4>RollNo : {student.rollNo}</h4>
        <h4>Gender : {student.gender}</h4>
      </div>
    </div>
  );
}

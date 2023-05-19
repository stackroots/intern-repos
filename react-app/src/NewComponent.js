import React from "react";

function NewComponent({ name, rollNo }) {
  return (
    <div>
      <h3>I am {name}</h3>
      <h2>My Roll Number is {rollNo}</h2>
    </div>
  );
}

export default NewComponent;

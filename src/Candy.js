import React from "react";
import { Link } from "react-router-dom";

const Candy = () => {
  return (
    <div>
      <h1>I am a Candy</h1>
      <p>
        Go to <Link to="/">Home</Link>
      </p>
    </div>
  );
};

export default Candy;

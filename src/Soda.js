import React from "react";
import { Link } from "react-router-dom";

const Soda = () => {
  return (
    <div>
      <h1>I am a Soda</h1>
      <p>
        Go to <Link to="/">Home</Link>
      </p>
    </div>
  );
};

export default Soda;

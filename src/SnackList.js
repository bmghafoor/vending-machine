import React from "react";
import { Link } from "react-router-dom";

const SnackList = () => {
  return (
    <ul>
      <li>
        <Link to="/Soda">Soda</Link>
      </li>
      <li>
        <Link to="/Chips">Chips</Link>
      </li>
      <li>
        <Link to="/Candy">Candy</Link>
      </li>
    </ul>
  );
};

export default SnackList;

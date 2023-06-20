import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SnackList from "./SnackList";
import Soda from "./Soda";
import Chips from "./Chips";
import Candy from "./Candy";

const VendingMachine = () => {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<SnackList />}></Route>
          <Route exact path="/Soda" element={<Soda />}></Route>
          <Route exact path="/Chips" element={<Chips />}></Route>
          <Route exact path="/Candy" element={<Candy />}></Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default VendingMachine;

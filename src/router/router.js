import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from "../pages/Homepage";
import Product from "../pages/Product";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="products/:id" element={<Product />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

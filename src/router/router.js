import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from "../pages/Homepage";
import Product from "../pages/Product";
import Login from "../pages/Login";
import Signin from "../pages/Signin";
import Mypage from "../pages/Mypage";
import Addproduct from "../pages/Addproduct";
import NotFound from "../pages/NotFound";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/signin" element={<Signin />}/>
        <Route path="/myPage" element={<Mypage />}/>
        <Route path="/addproduct" element={<Addproduct />}/>
        <Route path="/products/:id" element={<Product />}/>
        <Route path="/error" element={<NotFound />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

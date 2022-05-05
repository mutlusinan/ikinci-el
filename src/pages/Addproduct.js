import Header from "../components/Header";
import Newproduct from "../components/Newproduct";
import ImageUpload from "../components/ImageUpload";
import { StoreContext } from "../contexts/StoreContext.js";
import React, { useContext } from "react";

function Addproduct() {
  const { clickedCategory, setClickedCategory } = useContext(StoreContext);

  return (
    <>
      <Header />
      <Newproduct />
    </>
  );
}

export default Addproduct;

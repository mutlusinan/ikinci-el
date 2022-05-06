import React, { useState } from "react";

import Header from "../components/Header";
import OfferedProducts from "../components/OfferedProducts";
import OfferingProducts from "../components/OfferingProducts";
import MyProducts from "../components/MyProducts";
import Usercard from "../components/Usercard";

function Mypage() {
  const [clickedOffer, setClickedOffer] = useState("Teklif Aldıklarım");

  const activeCategory = async (e) => {
    document.querySelector("#activeCategory").removeAttribute("id");
    e.currentTarget.setAttribute("id", "activeCategory");
    setClickedOffer(e.currentTarget.innerHTML);
  };

  return (
    <>
      <Header />
      <Usercard />
      <div className="offerTable">
        <div className="offerSelection">
          <span id="activeCategory" onClick={activeCategory}>
            Teklif Aldıklarım
          </span>
          <span onClick={activeCategory}>Teklif Verdiklerim</span>
          <span onClick={activeCategory}>Ürünlerim</span>
        </div>
        {clickedOffer === "Teklif Aldıklarım" && <OfferedProducts />}
        {clickedOffer === "Teklif Verdiklerim" && <OfferingProducts />}
        {clickedOffer === "Ürünlerim" && <MyProducts />}
      </div>
    </>
  );
}

export default Mypage;

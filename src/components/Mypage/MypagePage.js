import React, { useState } from "react";

import OfferedProducts from "./OfferedProducts";
import OfferingProducts from "./OfferingProducts";
import MyProducts from "./MyProducts";

function MypagePage() {
  const [clickedOffer, setClickedOffer] = useState("Teklif Aldıklarım");

  const activeCategory = async (e) => {
    document.querySelector("#activeCategory").removeAttribute("id");
    e.currentTarget.setAttribute("id", "activeCategory");
    setClickedOffer(e.currentTarget.innerHTML);
  };

  return (
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
  );
}

export default MypagePage;

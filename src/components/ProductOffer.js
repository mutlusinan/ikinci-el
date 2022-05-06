import React, { useState } from "react";
import CloseButton from "../constants/CloseButton";
import UnselectedOffer from "../constants/UnselectedOffer";
import SelectedOffer from "../constants/SelectedOffer";
import ladyInBlue from "../img/ladyInBlue.png";

function ProductOffer() {
  const [offeredPrice, setOfferedPrice] = useState("");

  const activeCategory = async (e) => {
    document.querySelector("#selectedOption").removeAttribute("id");
    e.currentTarget.setAttribute("id", "selectedOption");
    console.log(e.currentTarget.innerText);
  };

  const fiyat = 100;
  return (
    <>
      <div className="absoluteBlueBackground">
        <div className="productOffer">
          <div className="productOfferHeader">
            <span className="productHeader">Teklif Ver</span>
            <span className="closeButton">
              <CloseButton />
            </span>
          </div>
          <div className="smallProductCard">
            <img src={ladyInBlue} alt="productImage" />
            <span className="smallProductName">Beli Uzun Trençkot Kareli</span>
            <span className="smallProductPrice">319,90 TL</span>
          </div>
          <div className="offerSelect">
            <div className="offerSelectOption" onClick={activeCategory}>
              <UnselectedOffer />
              <span>%40’ı Kadar Teklif Ver</span>
            </div>
            <div className="offerSelectOption" onClick={activeCategory}>
              <UnselectedOffer />
              <span>%60’ı Kadar Teklif Ver</span>
            </div>
            <div className="offerSelectOption" onClick={activeCategory}>
              <UnselectedOffer />
              <span>%80’i Kadar Teklif Ver</span>
            </div>
            <div className="priceLess">
              <input
                className="offerSelectOption paddin"
                id="selectedOption"
                onChange={(e) => setOfferedPrice(e.target.value)}
                onClick={activeCategory}
                value={offeredPrice}
                placeholder="Teklif belirle"
                required
              />
              <span className="priceHelper">TL</span>
            </div>
          </div>
          <div className="offerButton">
            <button>Onayla</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductOffer;

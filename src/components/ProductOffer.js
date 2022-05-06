import React, { useState, useEffect } from "react";
import CloseButton from "../constants/CloseButton";
import UnselectedOffer from "../constants/UnselectedOffer";
import SelectedOffer from "../constants/SelectedOffer";
import axios from "axios";

function ProductOffer({ productDetail }) {

  const [offerPrice, setOfferPrice] = useState();

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const config = {
    headers: {
      Authorization: `Bearer ${userInfo.jwt}`,
    },
  };

  async function sendOffer() {
    await await axios
      .post(
        "https://bootcamp.akbolat.net/offers",
        {
          product: productDetail.id,
          users_permissions_user: userInfo.user.id,
          offerPrice: offerPrice,
        },
        config
      )
      .then((response) => {
        console.log(response);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error.response.data.message);
      })
      .finally();
  }

  const activeCategory = (e) => {
    document.querySelector("#selectedOption").removeAttribute("id");
    e.currentTarget.setAttribute("id", "selectedOption");
    console.log(e.currentTarget.innerText);
    if (e.currentTarget.innerText === "%40’ı Kadar Teklif Ver") {
      setOfferPrice((productDetail.price * 40) / 100);
    } else if (e.currentTarget.innerText === "%60’ı Kadar Teklif Ver") {
      setOfferPrice((productDetail.price * 60) / 100);
    } else if (e.currentTarget.innerText === "%80’i Kadar Teklif Ver") {
      setOfferPrice((productDetail.price * 80) / 100);
    } else {
      
    }
  };

  

  function hideAndSeek(hide) {
    if (hide) {
      document
        .querySelector(".absoluteBlueBackground")
        .classList.remove("hidden");
      console.log(document.querySelector(".absoluteBlueBackground"));
    } else {
      document.querySelector(".absoluteBlueBackground").classList.add("hidden");
      console.log(document.querySelector(".absoluteBlueBackground"));
    }
  }

  return (
    <>
      <div className="absoluteBlueBackground hidden">
        <div className="productOffer">
          <div className="productOfferHeader">
            <span className="productHeader">Teklif Ver</span>
            <span className="closeButton" onClick={() => hideAndSeek(false)}>
              <CloseButton />
            </span>
          </div>
          <div className="smallProductCard">
            <img
              src={
                productDetail.image === null
                  ? "https://picsum.photos/id/445/700/800?grayscale"
                  : "https://bootcamp.akbolat.net/" + productDetail.image?.url
              }
              alt="productImage"
            />
            <span className="smallProductName">{productDetail.name}</span>
            <span className="smallProductPrice">
              {productDetail.price + " TL"}
            </span>
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
                onChange={(e) => setOfferPrice(e.target.value)}
                onClick={activeCategory}
                value={offerPrice}
                placeholder="Teklif belirle"
                required
              />
              <span className="priceHelper">TL</span>
            </div>
          </div>
          <div className="offerButton">
            <button onClick={() => sendOffer()}>Onayla</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductOffer;

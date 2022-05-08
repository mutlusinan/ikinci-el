import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { StoreContext } from "../../contexts/StoreContext.js";

function ListedProducts(props) {
  const { setContextProductId, isSold, setIsSold } = useContext(StoreContext);

  const navigate = useNavigate();

  const [offerStatus, setOfferStatus] = useState();
  const [offerResult, setOfferResult] = useState();

  useEffect(() => {
    setOfferStatus(props.offerStatus);
    setOfferResult(props.offerResult);
    setContextProductId(props.productID);
    

    if(props.isSold) setIsSold(props.isSold);

  }, [props]);

  const config = {
    headers: {
      Authorization: `Bearer ${props.token}`,
    },
  };

  async function buy(offerID, yaynay) {
    await axios
      .put(
        `https://bootcamp.akbolat.net/offers/${offerID}`,
        { isStatus: yaynay },
        config
      )
      .then((response) => {
        setOfferResult(yaynay);
      });
  }

  async function sold(productID) {
    await axios
      .put(
        `https://bootcamp.akbolat.net/products/${productID}`,
        { isSold: true },
        config
      )
      .then((response) => {
        setIsSold(true);
      });
  }

  function hideBuy() {
    document
      .querySelector(".absoluteBlueBackgroundBuy")
      .classList.remove("hidden");
  }

  return (
    <>
      <div className="offerCards">
        <div className="takenCards">
          <img className="" src={props.img} alt="product" />
          <span className="namePrice">
            <span
              className="takenName"
              onClick={() => navigate("/products/" + props.productID)}
            >
              {props.name}
            </span>
            <span className="takenPrice">
              <span className="first">
                {offerStatus === "myproduct" ? "Ürün fiyatı" : "Alınan Teklif"}
              </span>
              <span className="second">{props.offerPrice} TL</span>
            </span>
          </span>
          {offerStatus === "offered" && offerResult === null && (
            <button onClick={() => buy(props.offerID, true)}>Onayla</button>
          )}
          {offerStatus === "offered" && offerResult === null && (
            <button onClick={() => buy(props.offerID, false)}>Reddet</button>
          )}
          {offerStatus === "offered" && offerResult && (
            <span className="response granted">Onaylandı</span>
          )}
          {offerStatus === "offered" && offerResult === false && (
            <span className="response denied">Reddedildi</span>
          )}

          {offerStatus === "offering" && offerResult === false && (
            <span className="response denied">Reddedildi</span>
          )}
          {offerStatus === "offering" && offerResult === null && (
            <span className="response">Onay Bekliyor</span>
          )}
          {offerStatus === "offering" && offerResult && isSold && (
            <span className="response accepted">Satın Alındı</span>
          )}
          {offerStatus === "offering" && offerResult && !isSold && (
            <button onClick={() => hideBuy()}>Satın Al</button>
          )}
          {offerStatus === "offering" && offerResult && !isSold && (
            <span className="response granted permission">Onaylandı</span>
          )}

          {isSold && offerStatus === "myproduct" && (
            <span className="response accepted permission">Satıldı</span>
          )}
          {!isSold && offerStatus === "myproduct" && (
            <span className="response denied permission">Satılmadı</span>
          )}
        </div>
      </div>
    </>
  );
}

export default ListedProducts;

import React, { useState } from "react";
import axios from "axios";

import { buySuccessNotify } from "../../constants/toastifyNotify";

function ProductBuy({ productDetail, setIsSold }) {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const config = {
    headers: {
      Authorization: `Bearer ${userInfo?.jwt}`,
    },
  };

  async function buyProduct() {
    await axios
      .put(
        `https://bootcamp.akbolat.net/products/${productDetail.id}`,
        { isSold: true },
        config
      )
      .then(setIsSold(true))
      .then(hideAndSeek())
      .then(buySuccessNotify());
  }

  function hideAndSeek() {
    document
      .querySelector(".absoluteBlueBackgroundBuy")
      .classList.add("hidden");
  }

  return (
    <>
      <div className="absoluteBlueBackgroundBuy hidden">
        <div className="productBuy">
          <p className="buyHeader">Satın Al</p>
          <p className="buyDesc">Satın Almak istiyor musunuz?</p>
          <div className="buttons">
            <button onClick={() => hideAndSeek()}>Vazgeç</button>
            <button onClick={() => buyProduct()}>Satın Al</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductBuy;

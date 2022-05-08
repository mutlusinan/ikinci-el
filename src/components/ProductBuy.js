import React, { useState } from "react";
import axios from "axios";

function ProductBuy({ productDetail, setIsSold }) {
  const [loading, setLoading] = useState(false);

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const config = {
    headers: {
      Authorization: `Bearer ${userInfo?.jwt}`,
    },
  };

  async function buyProduct() {
    setLoading(true);

    await axios
      .put(
        `https://bootcamp.akbolat.net/products/${productDetail.id}`,
        { isSold: true },
        config
      )
      .then(() => {
        setIsSold(true);
      })
      .then(hideAndSeek())
      .finally(() => {
        setLoading(false);
      });
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
            <button onClick={() => hideAndSeek()} disabled={loading}>
              Vazgeç
            </button>
            <button onClick={() => buyProduct()} disabled={loading}>
              Satın Al
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductBuy;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ProductBuy({ productDetail }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

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
      .then(() => {
        setLoading(true);
        alert("Selam");
        window.location.reload();
      })
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

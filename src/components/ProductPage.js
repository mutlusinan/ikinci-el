import React, { useEffect, useState } from "react";
import axios from "axios";

function ProductPage({ productDetail }) {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const yourOffers = productDetail?.offers?.filter(
    (offer) => offer?.users_permissions_user === userInfo?.user?.id
  );

  function hideBuy() {
    document
      .querySelector(".absoluteBlueBackgroundBuy")
      .classList.remove("hidden");
  }

  function hideAndSeek(hide) {
    if (hide) {
      document
        .querySelector(".absoluteBlueBackgroundOffer")
        .classList.remove("hidden");
    } else {
      document
        .querySelector(".absoluteBlueBackgroundOffer")
        .classList.add("hidden");
    }
  }

  const config = {
    headers: {
      Authorization: `Bearer ${userInfo?.jwt}`,
    },
  };

  async function deleteOffer() {
    await axios
      .delete(`https://bootcamp.akbolat.net/offers/${yourOffers[0].id}`, config)
      .then((response) => {
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally();
  }

  return (
    <>
      <div className="productDetail">
        <div className="productDetailImage">
          <img
            src={
              productDetail?.image === null
                ? "https://picsum.photos/id/445/700/800?grayscale"
                : "https://bootcamp.akbolat.net/" + productDetail.image?.url
            }
            alt="lady"
          />
        </div>
        <div className="productDetails">
          <div className="detailHeader">{productDetail.name}</div>
          <div className="detailProps">
            <span className="propHead">Marka</span>
            <span>{productDetail.brand}</span>
            <span className="propHead">Renk</span>
            <span>{productDetail.color}</span>
            <span className="propHead">Kullanım durumu:</span>
            <span>{productDetail.status}</span>
          </div>
          <div className="detailPrice">{productDetail.price + " TL"}</div>
          {!(yourOffers?.length === 0) && (
            <div className="offeredPrice">
              <span>Verilen teklif: </span>
              <span>{yourOffers?.[0]?.offerPrice} TL</span>
            </div>
          )}

          <div className="detailButtons">
            {productDetail?.isSold && (
              <span className="soldButton">Bu Ürün Satışta Değil</span>
            )}
            {!productDetail?.isSold && (
              <span className="detailButton" onClick={() => hideBuy()}>
                <span>Satın Al</span>
              </span>
            )}

            {!productDetail?.isSold && yourOffers?.length === 0 && (
              <span className="detailButton" onClick={() => hideAndSeek(true)}>
                <span>Teklif Ver</span>
              </span>
            )}
            {!productDetail?.isSold && !(yourOffers?.length === 0) && (
              <span className="detailButton" onClick={() => deleteOffer()}>
                <span>Teklifi Geri Çek</span>
              </span>
            )}
          </div>
          <div className="detailAbout">
            <span className="aboutHeader">Açıklama</span>
            <span className="aboutDesc">{productDetail.description}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductPage;

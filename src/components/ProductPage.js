import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ProductPage({
  productDetail,
  setIsSold,
  isSold,
  yourOffers,
  setYourOffers,
}) {
  const navigate = useNavigate();
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  useEffect(() => {
    setIsSold(productDetail.isSold);
    if (
      !!productDetail?.offers?.filter(
        (offer) => offer?.users_permissions_user === userInfo?.user?.id
      )
    ) {
      setYourOffers(
        productDetail?.offers?.filter(
          (offer) => offer?.users_permissions_user === userInfo?.user?.id
        )
      );
    }
  }, [productDetail]);

  useEffect(() => {}, [yourOffers]);

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
        setIsSold(response.data.product.isSold);
        setYourOffers([]);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return (
    <>
      <div className="productDetail">
        <div className="productDetailImage">
          <img
            src={
              (productDetail?.image?.url===undefined && !productDetail?.image)
                ? "https://picsum.photos/id/445/700/800?grayscale"
                : "https://bootcamp.akbolat.net/" + productDetail?.image?.url
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
            <span className="propHead">Kullan??m durumu:</span>
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
            {isSold && (
              <span className="soldButton">Bu ??r??n Sat????ta De??il</span>
            )}
            {!isSold && (
              <span
                className="detailButton"
                onClick={
                  !!userInfo ? () => hideBuy() : () => navigate(`/login`)
                }
              >
                <span>Sat??n Al</span>
              </span>
            )}

            {productDetail.isOfferable && !isSold && yourOffers?.length === 0 && (
              <span
                className="detailButton"
                onClick={
                  !!userInfo
                    ? () => hideAndSeek(true)
                    : () => navigate(`/login`)
                }
              >
                <span>Teklif Ver</span>
              </span>
            )}
            {!isSold && !(yourOffers?.length === 0) && (
              <span className="detailButton" onClick={() => deleteOffer()}>
                <span>Teklifi Geri ??ek</span>
              </span>
            )}
          </div>
          <div className="detailAbout">
            <span className="aboutHeader">A????klama</span>
            <span className="aboutDesc">{productDetail.description}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductPage;

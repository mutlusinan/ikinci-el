import React, { useEffect, useState } from "react";
import ladyInBlue from "../img/ladyInBlue.png";
import axios from "axios";

function ProductPage({id}) {
  const [productDetail, setProductDetail] = useState([]);

  useEffect(() => {
    axios
      .get("https://bootcamp.akbolat.net/products/" + id)
      .then((response) => setProductDetail(response.data));
  }, []);

  useEffect(() => {
    console.log(productDetail);
  }, [productDetail]);

  return (
    <>
      <div className="productDetail">
        <div className="productDetailImage">
          <img
            src={"https://bootcamp.akbolat.net" + productDetail.image?.url}
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
          <div className="detailButtons">
            <span className="detailButton">
              <span>Satın Al</span>
            </span>
            <span className="detailButton">
              <span>Teklif Ver</span>
            </span>
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

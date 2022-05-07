import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ListedProducts(props) {
  const navigate = useNavigate();

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
      .then((response) => {window.location.reload();
      });
  }

  async function sold(productID) {
    await axios
      .put(
        `https://bootcamp.akbolat.net/products/${productID}`,
        { isSold: true },
        config
      )
      .then((response) => {window.location.reload();
      });
  }

  return (
    <>
      <div className="offerCards">
        <div className="takenCards">
          <img className="" src={props.img} alt="product" />
          <span className="namePrice">
            <span className="takenName" onClick={()=> navigate("/products/"+props.productID, { replace: false })}>{props.name}</span>
            <span className="takenPrice">
              <span className="first">{(props.offerStatus==="myproduct") ? "Ürün fiyatı" : "Alınan Teklif"}</span>
              <span className="second">{props.offerPrice} TL</span>
            </span>
          </span>
          {props.offerStatus === "offered" && props.offerResult === null && (
            <button onClick={() => buy(props.offerID, true)}>Onayla</button>
          )}
          {props.offerStatus === "offered" && props.offerResult === null && (
            <button onClick={() => buy(props.offerID, false)}>Reddet</button>
          )}
          {props.offerStatus === "offered" && props.offerResult === true && (
            <span className="response granted">Onaylandı</span>
          )}
          {props.offerStatus === "offered" && props.offerResult === false && (
            <span className="response denied">Reddedildi</span>
          )}

          {props.offerStatus === "offering" && props.offerResult === null && (
            <span className="response">Onay Bekliyor</span>
          )}
          {props.offerStatus === "offering" && props.offerResult === false && (
            <span className="response denied">Reddedildi</span>
          )}
          {props.offerStatus === "offering" &&
            props.offerResult === true &&
            props.isSold === true && (
              <span className="response accepted">Satın Alındı</span>
            )}
          {props.offerStatus === "offering" &&
            props.offerResult === true &&
            !props.isSold === true && (
              <button onClick={() => sold(props.productID)}>Satın Al</button>
            )}
          {props.offerStatus === "offering" &&
            props.offerResult === true &&
            !props.isSold === true && (
              <span className="response granted permission">Onaylandı</span>
            )}
        </div>
      </div>
    </>
  );
}

export default ListedProducts;

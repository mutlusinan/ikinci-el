import React, { useState, useContext } from "react";

import Header from "../components/Header";
import Avatar from "../constants/Avatar.js";
import { StoreContext } from "../contexts/StoreContext.js";

function Offer() {
  const { userID, setUserID } = useContext(StoreContext);

  return (
    <>
      <Header />
      <div className="userCard">
        <span className="userAvatar">
          <Avatar />
        </span>
        <span className="userNameDisplay">account@name.com</span>
      </div>
      <div className="offerTable">
        <div className="offerSelection">
          <span id="activeCategory">Teklif Aldıklarım</span>
          <span>Teklif Verdiklerim</span>
        </div>
        <div className="offerCards">
          <div className="takenCards">
            <img src="/" alt="product" />
            <span className="namePrice">
              <span className="takenName">Beli Uzun Trençkot Kareli</span>
              <span className="takenPrice">
                <span className="first">Alınan Teklif</span>
                <span className="second">100 TL</span>
              </span>
            </span>
            <button>Onayla</button>
            <button>Reddet</button>
            <span></span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Offer;

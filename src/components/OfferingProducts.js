import React, { useEffect, useState } from "react";
import axios from "axios";

import DummyListed from "./DummyListed";
import ListedProducts from "./ListedProducts";

function OfferingProducts() {
  const [offerDetail, setOfferDetail] = useState([]);

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.jwt}`,
      },
    };

    axios
      .get("https://bootcamp.akbolat.net/offers?_limit=2000", config)
      .then((response) => {
        setOfferDetail(response.data);
        console.log(response.data);
      });
  }, []);

  let offeringList = offerDetail?.filter(
    (offer) => offer?.users_permissions_user?.id === userInfo?.user?.id
  );

  return (
    <>
    {offeringList.length === 0 && <DummyListed/>}
      {offeringList.map((offer) => (
        
        <ListedProducts
          key={offer.id}
          img={
            offer?.product?.image === null
              ? "https://picsum.photos/id/445/700/800"
              : "https://bootcamp.akbolat.net/" + offer.product.image?.url
          }
          name={offer?.product?.name}
          offerPrice={offer?.offerPrice}
          productID={offer?.product.id}
          token={userInfo.jwt}
          offerResult={offer?.isStatus}
          isSold={offer?.product?.isSold}
          offerStatus="offering"
        />
      ))}
    </>
  );
}

export default OfferingProducts;

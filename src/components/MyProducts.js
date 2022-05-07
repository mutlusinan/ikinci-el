import React, { useEffect, useState } from "react";
import axios from "axios";

import DummyListed from "./DummyListed";
import ListedProducts from "./ListedProducts";

function MyProducts() {
  const [productDetail, setProductDetail] = useState([]);

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.jwt}`,
      },
    };

    axios
      .get("https://bootcamp.akbolat.net/products?_limit=2000", config)
      .then((response) => {
        setProductDetail(response.data);
      });
  }, []);

  let myProducts = productDetail?.filter(
    (product) => product?.users_permissions_user?.id === userInfo?.user?.id
  ).reverse();



  return (
    <>
    {myProducts.length === 0 && <DummyListed offerStatus="myproducts" />}
      {myProducts.map((offer) => (
        
        
        <ListedProducts
          key={offer.id}
          img={
            offer?.product?.image === null
              ? "https://picsum.photos/id/445/700/800"
              : "https://bootcamp.akbolat.net/" + offer.image?.url
          }
          name={offer?.name}
          offerPrice={offer?.price}
          productID={offer?.id}
          token={userInfo.jwt}
          offerResult={offer?.isSold}
          isSold={offer?.isSold}
          offerStatus="myproduct"

        />
      ))}
    </>
  );
}

export default MyProducts;

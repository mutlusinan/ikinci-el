import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import Header from "../components/Common/Header";
import ProductPage from "../components/ProductPage";
import ProductOffer from "../components/ProductOffer";
import ProductBuy from "../components/Common/ProductBuy";

function Product() {
  const navigate = useNavigate();

  let { id } = useParams();
  const [productDetail, setProductDetail] = useState([]);
  const [isSold, setIsSold] = useState();
  const [yourOffers, setYourOffers] = useState([]);

  useEffect(() => {
    if (!!id) {
      axios
        .get("https://bootcamp.akbolat.net/products/" + id)
        .then((response) => {
          setProductDetail(response.data);
          if (response.data.name === undefined) navigate(`/login`);
        });
    }
  }, [id]);

  return (
    <>
      <ProductOffer
        productDetail={productDetail}
        setYourOffers={setYourOffers}
      />
      <ProductBuy productDetail={productDetail} setIsSold={setIsSold} />
      <Header />
      <ProductPage
        productDetail={productDetail}
        isSold={isSold}
        setIsSold={setIsSold}
        yourOffers={yourOffers}
        setYourOffers={setYourOffers}
      />
    </>
  );
}

export default Product;

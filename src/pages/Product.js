import Header from "../components/Common/Header";
import ProductPage from "../components/ProductPage";
import { useParams } from "react-router-dom";
import ProductOffer from "../components/ProductOffer";
import ProductBuy from "../components/ProductBuy";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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

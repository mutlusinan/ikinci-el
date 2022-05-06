import Header from "../components/Header";
import ProductPage from "../components/ProductPage";
import { useParams } from "react-router-dom";
import ProductOffer from "../components/ProductOffer";
import { useEffect, useState } from "react";
import axios from "axios";

function Product() {
  let { id } = useParams();
  const [productDetail, setProductDetail] = useState([]);

  useEffect(() => {
    axios
      .get("https://bootcamp.akbolat.net/products/" + id)
      .then((response) => setProductDetail(response.data));
  }, []);

  return (
    <>
      <ProductOffer productDetail={productDetail} />
      <Header />
      <ProductPage productDetail={productDetail} />
    </>
  );
}

export default Product;

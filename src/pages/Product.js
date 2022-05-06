import Header from "../components/Header";
import ProductPage from "../components/ProductPage";
import { useParams } from "react-router-dom";
import ProductOffer from "../components/ProductOffer";

function Product() {
  let { id } = useParams();

  return (
    <>
      <ProductOffer />
      <Header />
      <ProductPage id={id} />
    </>
  );
}

export default Product;

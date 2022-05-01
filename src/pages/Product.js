import Header from "../components/Header";
import ProductPage from "../components/ProductPage";
import { useParams } from "react-router-dom";


function Product() {
  let { id } = useParams();

  return (
    <>
      <Header />
      <ProductPage id={id} />
    </>
  );
}

export default Product;

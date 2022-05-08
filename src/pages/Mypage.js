import { useContext } from "react";
import { Slide, ToastContainer } from "react-toastify";

import ProductBuy from "../components/Common/ProductBuy";
import Header from "../components/Common/Header";
import Usercard from "../components/Mypage/Usercard";
import MypagePage from "../components/Mypage/MypagePage";

import "react-toastify/dist/ReactToastify.css";
import "../css/toastifyStyle.css";

import { StoreContext } from "../contexts/StoreContext.js";


function Mypage() {
  const { setIsSold, contextProductId } = useContext(StoreContext);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Slide}
      />
      <ProductBuy
        productDetail={{ id: contextProductId }}
        setIsSold={setIsSold}
      />
      <Header />
      <Usercard />
      <MypagePage />
    </>
  );
}

export default Mypage;

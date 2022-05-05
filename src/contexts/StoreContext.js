import React, { useState } from "react";

const StoreContext = React.createContext();

const StoreProvider = ({ children }) => {
  //Seçili kategori
  const [clickedCategory, setClickedCategory] = useState("Hepsi");
  const [userID, setUserID] = useState(null);
  const [userToken, setUserToken] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  

  return (
    <StoreContext.Provider
      value={{
        clickedCategory,
        setClickedCategory,
        userID,
        setUserID,
        userToken,
        setUserToken,
        loggedIn,
        setLoggedIn,
        // productName,
        // setProductName,
        // productDesc,
        // setProductDesc,
        // productCategory,
        // setProductCategory,
        // productBrand,
        // setProductBrand,
        // productColor,
        // setProductColor,
        // productUsing,
        // setProductUsing,
        // productPrice,
        // setProductPrice,
        // productOffer,
        // setProductOffer,
        // productImage,
        // setProductImage,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export { StoreContext, StoreProvider };

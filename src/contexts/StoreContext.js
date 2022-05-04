import React, { useState } from "react";

const StoreContext = React.createContext();

const StoreProvider = ({ children }) => {
  //Seçili kategori
  const [clickedCategory, setClickedCategory] = useState("Hepsi");
  const [userID, setUserID] = useState(null);
  const [userToken, setUserToken] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  //   //Soru sayısını bir artır
  //   const kacSoru = (data) => {
  //     setSessionQ(sessionQ + 1);
  //   };

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
        setLoggedIn
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export { StoreContext, StoreProvider };

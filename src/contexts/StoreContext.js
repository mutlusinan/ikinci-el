import React, { useState } from "react";

const StoreContext = React.createContext();

const StoreProvider = ({ children }) => {
  //Seçili kategori
  const [clickedCategory, setClickedCategory] = useState("Hepsi");
 
//   //Soru sayısını bir artır
//   const kacSoru = (data) => {
//     setSessionQ(sessionQ + 1);
//   };

  return (
    <StoreContext.Provider
      value={{
        clickedCategory,
        setClickedCategory      
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export { StoreContext, StoreProvider };
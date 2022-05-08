import { createContext, useEffect, useState } from "react";

const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const [isSold, setIsSold] = useState(null);
  const [contextProductId, setContextProductId] = useState(null);

  return (
    <StoreContext.Provider
      value={{
        isSold,
        setIsSold,
        contextProductId,
        setContextProductId
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
export { StoreContext, StoreProvider };

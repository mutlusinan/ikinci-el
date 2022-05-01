
import "./css/logScreen.css";
import React from "react";
import { StoreProvider } from "./contexts/StoreContext.js";
import Router from "./router/router.js";

function App() {
  return (
    <>
      <StoreProvider>
        <Router />
      </StoreProvider>
    </>
  );
}

export default App;

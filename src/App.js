import Header from "./components/Header";
import Banner from "./components/Banner";
import Slider from "./components/Slider";
import CardGroup from "./components/CardGroup";
import "./css/logScreen.css";
import React from "react";
import { StoreProvider } from "./contexts/StoreContext.js";

function App() {
  return (
    <>
      <StoreProvider>
        <Header />
        <Banner />
        <Slider />
        <CardGroup />
      </StoreProvider>
    </>
  );
}

export default App;

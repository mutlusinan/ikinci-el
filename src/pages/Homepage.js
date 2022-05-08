import Header from "../components/Common/Header";
import Banner from "../components/Homepage/Banner";
import Slider from "../components/Homepage/Slider";
import CardGroup from "../components/Homepage/CardGroup";
import { useState } from "react";

function Homepage() {
  const [clickedCategory, setClickedCategory] = useState("Hepsi");

  return (
    <>
      <Header />
      <Banner />
      <Slider
        clickedCategory={clickedCategory}
        setClickedCategory={setClickedCategory}
      />
      <CardGroup clickedCategory={clickedCategory} />
    </>
  );
}

export default Homepage;

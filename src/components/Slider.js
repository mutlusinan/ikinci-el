import React, { useEffect, useState, useContext } from "react";
import { StoreContext } from "../contexts/StoreContext.js";
import axios from "axios";

function Slider() {

  const { clickedCategory, setClickedCategory } = useContext(StoreContext);

  const [categoryData, setCategoryData] = useState([]);
  const [categoryLoad, setCategoryLoad] = useState(false);

  useEffect(() => {
    axios
      .get("https://bootcamp.akbolat.net/categories")
      .then((response) => setCategoryData(response.data))
      .then((data) => setCategoryLoad(true));
  }, []);

  const activeCategory = async (e) => {
    document.querySelector("#activeCategory").removeAttribute("id");
    e.currentTarget.setAttribute("id", "activeCategory");
    setClickedCategory(e.currentTarget.innerHTML);
  };

  useEffect(() => {
    console.log(clickedCategory);
  }, [clickedCategory]);

  return (
    <div className="slider">
      <a id="activeCategory" onClick={activeCategory}>
        Hepsi
      </a>
      {categoryLoad &&
        categoryData.map(
          (category) =>
            category.products.length !== 0 && (
              <a onClick={activeCategory} key={category.id}>
                {category.name}
              </a>
            )
        )}
    </div>
  );
}
export default Slider;

import React, { useEffect, useState } from "react";
import axios from "axios";

function Slider({ setClickedCategory }) {
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

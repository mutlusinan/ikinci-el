import axios from "axios";
import { useEffect, useState } from "react";

function Newproduct() {
  const data = ["red", "white"];

  const [categoryData, setCategoryData] = useState([]);
  const [brandData, setBrandData] = useState([]);
  const [colorData, setColorData] = useState([]);
  const [usingData, setUsingData] = useState([]);
  const [categoryLoad, setCategoryLoad] = useState(false);

  useEffect(() => {
    axios
      .get("https://bootcamp.akbolat.net/categories")
      .then((response) => setCategoryData(response.data))
      .then(console.log(categoryData));

    axios
      .get("https://bootcamp.akbolat.net/using-statuses")
      .then((response) => setUsingData(response.data))
      .then(console.log(usingData));

    axios
      .get("https://bootcamp.akbolat.net/brands")
      .then((response) => setBrandData(response.data))
      .then(console.log(brandData));

    axios
      .get("https://bootcamp.akbolat.net/colors")
      .then((response) => setColorData(response.data))
      .then(console.log(colorData));
  }, []);

  useEffect(() => {
    console.log(categoryData);
  }, [categoryData]);

  return (
    <>
      <div className="addProductCard">
        <div className="addProductLeft">
          <p className="addProductDetailsHeader">Ürün Detayları</p>
          <form className="addForm">
            <div>
              <p className="addProductDetails">Ürün Adı</p>
              <input
                className="inputName"
                placeholder="Örnek: Iphone 12 Pro Max"
              ></input>
            </div>
            <div>
              <p className="addProductDetails">Açıklama</p>
              <textarea
                className="inputDesc"
                placeholder="Ürün açıklaması girin"
              ></textarea>
            </div>
            <div className="formGrid">
              <div>
                <p className="addProductDetails">Kategori</p>
                <select id="categoryData">
                  <option disabled selected hidden>
                    Kategori seç
                  </option>
                  {categoryData.map((category) => (
                    <option key={category.id} value={category.name}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <p className="addProductDetails">Marka</p>
                <select id="brandData">
                  <option disabled selected hidden>
                    Marka seç
                  </option>
                  {brandData.map((brand) => (
                    <option key={brand.id} value={brand.name}>
                      {brand.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <p className="addProductDetails">Renk</p>
                <select id="colorData">
                  <option disabled selected hidden>
                    Renk seç
                  </option>
                  {colorData.map((color) => (
                    <option key={color.id} value={color.name}>
                      {color.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <p className="addProductDetails">Kullanım Durumu</p>
                <select id="usingData">
                  <option disabled selected hidden>
                    Kullanım durumu seç
                  </option>
                  {usingData.map((using) => (
                    <option key={using.id} value={using.name}>
                      {using.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="addPrice">
              <p className="addProductDetails">Fiyat</p>
              <div className="priceLess">
                <input className="priceInput" placeholder="Bir fiyat girin" />
                <span className="priceHelper">TL</span>
              </div>
            </div>
            <div>
              <div class="switchButton">
                <span className="switchBtn">Teklif opsiyonu</span>
                <div>
                  <input type="checkbox" id="switch" />
                  <label for="switch">Toggle</label>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default Newproduct;

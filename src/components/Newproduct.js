import axios from "axios";
import { useEffect, useState, useContext } from "react";
import closeButton from "../img/closeButton.png";
import { useDropzone } from "react-dropzone";
import "../css/DragUploader.css";

import { StoreContext } from "../contexts/StoreContext.js";

function Newproduct() {
  // const { clickedCategory, setClickedCategory } = useContext(StoreContext);

  const [categoryData, setCategoryData] = useState([]);
  const [brandData, setBrandData] = useState([]);
  const [colorData, setColorData] = useState([]);
  const [usingData, setUsingData] = useState([]);
  const [loading, setLoading] = useState(false);

  const [productName, setProductName] = useState("");
  const [productDesc, setProductDesc] = useState("");
  const [productCategory, setProductCategory] = useState(0);
  const [productBrand, setProductBrand] = useState("");
  const [productColor, setProductColor] = useState("");
  const [productUsing, setProductUsing] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productOffer, setProductOffer] = useState(false);
  const [productImage, setProductImage] = useState("");

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  useEffect(() => {
    axios
      .get("https://bootcamp.akbolat.net/categories")
      .then((response) => setCategoryData(response.data));

    axios
      .get("https://bootcamp.akbolat.net/using-statuses")
      .then((response) => setUsingData(response.data));

    axios
      .get("https://bootcamp.akbolat.net/brands")
      .then((response) => setBrandData(response.data));

    axios
      .get("https://bootcamp.akbolat.net/colors")
      .then((response) => setColorData(response.data));
  }, []);

  // const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  // const files = acceptedFiles.map((file) => (
  //   <li key={file.path}>
  //     {file.path} - {file.size} bytes
  //   </li>
  // ));

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const token = userInfo.jwt;

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const productData = {
      name: productName,
      description: productDesc,
      category: productCategory,
      brand: productBrand,
      color: productColor,
      status: productUsing,
      price: productPrice,
      isOfferable: productOffer,
      users_permissions_user: userInfo.user.id,
    };
    const form = new FormData();
    form.append('data', JSON.stringify(productData));
    form.append("files.image", productImage);

    await axios
      .post("https://bootcamp.akbolat.net/products", form, config)
      .then((response) => {
        console.log(response);
        // localStorage.setItem("userInfo", JSON.stringify(response.data));
        // setLoggedIn(true);
        // navigate("/", { replace: true });
      })
      .catch((error) => {
        console.log(error.response.data.message);
      })
      .finally(setLoading(false));
  }

  return (
    <>
      <div className="addProductCard">
        <form
          className="addForm"
          onSubmit={handleSubmit}
          name="myForm"
          id="myForm"
        >
          <div className="addProduct">
            <div className="addProductLeft">
              <p className="addProductDetailsHeader">Ürün Detayları</p>
              <p className="addProductDetails">Ürün Adı</p>
              <input
                className="inputName"
                placeholder="Örnek: Iphone 12 Pro Max"
                onChange={(e) => setProductName(e.target.value)}
                name="name"
                value={productName}
              />

              <p className="addProductDetails">Açıklama</p>
              <textarea
                className="inputDesc"
                placeholder="Ürün açıklaması girin"
                onChange={(e) => setProductDesc(e.target.value)}
                name="description"
                value={productDesc}
              />
              <div className="formGrid">
                <div>
                  <p className="addProductDetails">Kategori</p>
                  <select
                    onChange={(e) => setProductCategory(e.target.value)}
                    id="category"
                    value={productCategory}
                  >
                    <option value="" hidden>
                      Kategori seç
                    </option>
                    {categoryData.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <p className="addProductDetails">Marka</p>
                  <select
                    onChange={(e) => setProductBrand(e.target.value)}
                    id="brand"
                    value={productBrand}
                  >
                    <option value="" hidden>
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
                  <select
                    onChange={(e) => setProductColor(e.target.value)}
                    id="color"
                    value={productColor}
                  >
                    <option value="" hidden>
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
                  <select
                    onChange={(e) => setProductUsing(e.target.value)}
                    id="status"
                    value={productUsing}
                  >
                    <option value="" hidden>
                      Kullanım durumu seç
                    </option>
                    {usingData.map((using) => (
                      <option key={using.id} value={using.name}>
                        {using.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="addPrice">
                  <p className="addProductDetails">Fiyat</p>
                  <div className="priceLess">
                    <input
                      className="priceInput"
                      onChange={(e) => setProductPrice(e.target.value)}
                      id="price"
                      value={productPrice}
                      placeholder="Bir fiyat girin"
                      type="number"
                    />
                    <span className="priceHelper">TL</span>
                  </div>

                  <div className="switchButton">
                    <span className="switchBtn">Teklif opsiyonu</span>
                    <div>
                      <input
                        type="checkbox"
                        onChange={(e) => setProductOffer(e.target.checked)}
                        id="switch"
                      />
                      <label htmlFor="switch">Toggle</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="addProductRight">
              <div className="addImage">
                <p className="addProductDetailsHeader">Ürün Görseli</p>

                {productImage && (
                  <div className="uploadedImage">
                    <span onClick={() => setProductImage(null)}>
                      <img
                        src={closeButton}
                        className="removeBtn"
                        alt="remove"
                      />
                    </span>
                    <img
                      className="uploadedImage"
                      alt="not found"
                      src={URL.createObjectURL(productImage)}
                    />
                    <br />
                  </div>
                )}

                {!productImage && (
                  <>
                    <input
                      type="file"
                      name="myImage"
                      onChange={(event) => {
                        console.log(event.target.files);
                        setProductImage(event.target.files[0]);
                      }}
                    />
                  </>
                )}
              </div>
            </div>
          </div>
          <button className="productSendButton" type="submit">
            Kaydet
          </button>
        </form>
      </div>
    </>
  );
}

export default Newproduct;

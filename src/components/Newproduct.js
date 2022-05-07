import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, ErrorMessage } from "formik";
import axios from "axios";
import clsx from "clsx";

import "../css/DragUploader.css";
import closeButton from "../img/closeButton.png";
import { ProductSchema } from "../constants/yupSchema";

function Newproduct() {
  const navigate = useNavigate();

  const [categoryData, setCategoryData] = useState([]);
  const [brandData, setBrandData] = useState([]);
  const [colorData, setColorData] = useState([]);
  const [usingData, setUsingData] = useState([]);
  const [loading, setLoading] = useState(false);

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

  async function postProduct(auth) {
    setLoading(true);
    const userData = {
      users_permissions_user: userInfo.user.id,
    };
    const productData = Object.assign(auth, userData);

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.jwt}`,
      },
    };

    const form = new FormData();
    form.append("data", JSON.stringify(productData));
    form.append("files.image", productImage);

    await axios
      .post("https://bootcamp.akbolat.net/products", form, config)
      .then((response) => {
        navigate(`/products/${response?.data?.id}`);
      })
      .catch((error) => {
        console.log(error.response);
        setLoading(false);
      });
  }

  return (
    <>
      <div className="addProductCard">
        <Formik
          initialValues={{
            name: "",
            description: "",
            category: "",
            brand: "",
            color: "",
            status: "",
            price: "",
            isOfferable: false,
          }}
          onSubmit={(auth) => {
            postProduct(auth);
          }}
          validationSchema={ProductSchema}
          validateOnChange={false}
        >
          {({ values, handleChange, handleSubmit, errors }) => (
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
                    className={clsx("inputName", {
                      inputError: !!errors.name,
                    })}
                    placeholder="Örnek: Iphone 12 Pro Max"
                    onChange={handleChange}
                    name="name"
                    value={values.name}
                  />
                  <div className="loginValidation">
                    <ErrorMessage name="name" />
                  </div>
                  <p className="addProductDetails">Açıklama</p>
                  <textarea
                    className="inputDesc"
                    placeholder="Ürün açıklaması girin"
                    onChange={handleChange}
                    name="description"
                    value={values.description}
                  />
                  <div className="formGrid">
                    <div>
                      <p className="addProductDetails">Kategori</p>
                      <select
                        className={clsx("priceInput", {
                          inputError: !!errors.category,
                        })}
                        onChange={handleChange}
                        id="category"
                        value={values.category}
                        name="category"
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
                      <div className="loginValidation">
                        <ErrorMessage name="category" />
                      </div>
                    </div>
                    <div>
                      <p className="addProductDetails">Marka</p>
                      <select
                        onChange={handleChange}
                        id="brand"
                        value={values.brand}
                        name="brand"
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
                        onChange={handleChange}
                        id="color"
                        value={values.color}
                        name="color"
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
                        onChange={handleChange}
                        id="status"
                        value={values.status}
                        name="status"
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
                          className={clsx("priceInput", {
                            inputError: !!errors.price,
                          })}
                          onChange={handleChange}
                          id="price"
                          value={values.price}
                          placeholder="Bir fiyat girin"
                          name="price"
                        />
                        <span className="priceHelper">TL</span>
                      </div>
                      <div className="loginValidation">
                        <ErrorMessage name="price" />
                      </div>
                      <div className="switchButton">
                        <span className="switchBtn">Teklif opsiyonu</span>
                        <div>
                          <input
                            type="checkbox"
                            onChange={handleChange}
                            id="switch"
                            name="isOfferable"
                            checked={values.isOfferable}
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
                            setProductImage(event.target.files[0]);
                          }}
                        />
                      </>
                    )}
                  </div>
                </div>
              </div>
              <button className="productSendButton" type="submit">
                {loading ? "Ekleniyor" : "Kaydet"}
              </button>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
}

export default Newproduct;

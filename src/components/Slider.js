import React, { useEffect, useState } from 'react'
import axios from "axios";


function Slider() {

    const [categoryList, setCategoryList] = useState([])
    const [categoryLoad, setCategoryLoad] = useState(false)

    useEffect(() => {
        axios
          .get("https://bootcamp.akbolat.net/categories")
          .then((response) => setCategoryList(response.data))
          .then(() => setCategoryLoad(true));
      }, []);

  return (
    <div className="slider"></div>
  )
}

export default Slider
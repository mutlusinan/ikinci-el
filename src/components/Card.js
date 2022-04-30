import React from "react";

function Card(props) {
  return (
    <>
      <div className="productCard" key={props.id}>
        <div>
          <img src={props.img} alt="product" />
        </div>
        <div className="brandColor">
          <span className="brandName bold">{props.brand}</span>
          <span className="productColor">
            <span className="bold">Renk: </span>
            {props.color}
          </span>
        </div>
        <div className="productPrice bold">{props.price} TL</div>
      </div>
    </>
  );
}

export default Card;

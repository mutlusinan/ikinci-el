import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

function CardGroup({clickedCategory}) {

  const [cardData, setCardData] = useState([]);
  const [cardLoad, setCardLoad] = useState(false);
  useEffect(() => {
    axios
      .get("https://bootcamp.akbolat.net/products?_limit=2000")
      .then((response) => setCardData(response.data))
      .then(() => setCardLoad(true));
  }, []);

  return (
    <div className="cardGroup">
      {cardLoad &&
        cardData
          ?.filter(
            (card) =>
              clickedCategory === card?.category?.name ||
              clickedCategory === "Hepsi"
          )
          .map((card) => (
            <Card
              img={
                card.image === null
                  ? "https://picsum.photos/id/445/700/800"
                  : "https://bootcamp.akbolat.net/" + card?.image?.url
              }
              id={card.id}
              key={card.id}
              brand={card.brand}
              color={card.color}
              price={card.price}
            />
          ))}
    </div>
  );
}

export default CardGroup;

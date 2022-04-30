import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";

function CardGroup() {
  const [cardData, setCardData] = useState([]);
  const [cardLoad, setCardLoad] = useState(false);
  useEffect(() => {
    axios
      .get("https://bootcamp.akbolat.net/products")
      .then((response) => setCardData(response.data))
      .then(() => setCardLoad(true));
  }, []);

  useEffect(() => {
    console.log(cardData);
  }, [cardData]);

  return (
    <div className="cardGroup">
      {cardLoad &&
        cardData.map((card) => (
            card.isOfferable && !card.isSold && <Card
            img={
                "https://bootcamp.akbolat.net/"+card.image.url
            }
            id={card.id}
            brand= {card.brand}
            color= {card.color}
            price= {card.price}

          />
        ))}
    </div>
  );
}

export default CardGroup;

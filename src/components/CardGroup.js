import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import Card from "../components/Card";
import { StoreContext } from "../contexts/StoreContext.js";


function CardGroup() {
  const { clickedCategory } = useContext(StoreContext);
  
  const [cardData, setCardData] = useState([]);
  const [cardLoad, setCardLoad] = useState(false);
  useEffect(() => {
    axios
      .get("https://bootcamp.akbolat.net/products?_limit=20")
      .then((response) => setCardData(response.data))
      .then(() => setCardLoad(true));
  }, []);

  useEffect(() => {
    console.log(cardData);
  }, [cardData]);

  return (
    <div className="cardGroup">
      {cardLoad &&
        cardData.filter((card)=>(clickedCategory===card.category.name || clickedCategory==="Hepsi")).map((card) => (
            // card.isOfferable && !card.isSold &&
            <Card
            img={ "https://bootcamp.akbolat.net"+card.image.url}
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

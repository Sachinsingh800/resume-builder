import { v4 as uuidv4 } from "uuid";
import React from "react"
import { Link } from "react-router-dom";
import Carroussel from "./Carroussel";
import CardTempletes from "./CardTempletes";

export default function Carsouel() {
  let cards = [
    {
      key: uuidv4(),
      content: <CardTempletes/>
    },
    {
      key: uuidv4(),
      content: <CardTempletes/>
    },
    {
      key: uuidv4(),
      content: <CardTempletes/>
    },
  
  ]; 



  return (
    <div className="App">
      <Carroussel
        cards={cards}
        height="500px"
        width="90%"
        margin="0 auto"
        offset={2}
        showArrows={false}
      />
    </div>
  );
}
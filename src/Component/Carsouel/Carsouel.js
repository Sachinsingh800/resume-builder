import { v4 as uuidv4 } from "uuid";
import React from "react"
import { Link } from "react-router-dom";
import Carroussel from "./Carroussel";
import { CardTempletes1, CardTempletes2, CardTempletes3 } from "./CardTempletes";




export default function Carsouel() {
  let cards = [
    {
      key: uuidv4(),
      content: <CardTempletes1 />
    },
    {
      key: uuidv4(),
      content:  <CardTempletes2 />
    },
    {
      key: uuidv4(),
      content: <CardTempletes3 />
    },
  
  ]; 



  return (
    <div className="App">
      <Carroussel
        cards={cards}
        height="500px"
        width="100%"
        margin="0 auto"
        offset={2}
        showArrows={false}
      />
    </div>
  );
}
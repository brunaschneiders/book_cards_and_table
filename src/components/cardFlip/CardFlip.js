import React, { useState } from "react";

import { Front, Back, DescriptionBook, Button } from "./styles";
import ReactCardFlip from "react-card-flip";
import "./card.css";

export default function CardFlip({ bookCover, bookDescription }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <Front>
        <Button onClick={handleClick}>Visualizar descrição do livro</Button>
        <img src={bookCover} style={{ width: "100%", height: "550px" }}></img>
      </Front>

      <Back>
        <Button onClick={handleClick}>Voltar para a capa do livro</Button>
        <DescriptionBook>{bookDescription}</DescriptionBook>
      </Back>
    </ReactCardFlip>
  );
}

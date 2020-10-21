import React from "react";
import styled from "styled-components";
import inklusiivBackground from "./inklusiivcard.png";

const CardStyled = styled.div`
  width: 30em;
  box-sizing: border-box;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.05);
  margin: 2em;
  padding: 0.25em;
  border-radius: 0.5rem;
  background-color: white;
  img {
    width: 100%;
  }
`;

export const Card = () => {
  return (
    <CardStyled>
      <img src={inklusiivBackground} alt={"Inklusiiv"}></img>
      <div>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </div>
    </CardStyled>
  );
};

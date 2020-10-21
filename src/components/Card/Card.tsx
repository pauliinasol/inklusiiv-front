import React, { FC } from "react";
import styled from "styled-components";
import inklusiivBackground from "./inklusiivbcg.png";

const CardStyled = styled.div`
  width: 30em;
  height: 30em;
  box-sizing: border-box;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.05);
  margin: 2em;
  padding: 0.25em;
  border-radius: 0.5rem;
  background-color: white;
  overflow: scroll;
  img {
    width: 100%;
  }
`;

const Paragraph = styled.div`
  padding: 2em;
`;

interface ICardProps {
  content: string;
}

export const Card: FC<ICardProps> = ({ content }) => {
  return (
    <CardStyled>
      <img src={inklusiivBackground} alt={"Inklusiiv"}></img>
      <Paragraph>{content}</Paragraph>
    </CardStyled>
  );
};

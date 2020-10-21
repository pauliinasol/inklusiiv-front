import React from "react";
import styled from "styled-components";
import { Card } from "../Card/Card";

const BoardStyled = styled.div`
  margin-top: 3em;
  margin-left: 4em;
  margin-right: 4em;
  display: flex;
  /* flex-direction: row; */
`;

const BoardItemsStyled = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

export const Board = () => {
  return (
    <BoardStyled>
      <BoardItemsStyled>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </BoardItemsStyled>
    </BoardStyled>
  );
};

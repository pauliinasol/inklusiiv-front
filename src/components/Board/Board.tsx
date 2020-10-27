import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { path } from "ramda";
import { Card } from "../Card/Card";

const BoardStyled = styled.div`
  margin-top: 3em;
  margin-left: 4em;
  margin-right: 4em;
  display: flex;
  background-color: #f2efe3;
`;

const BoardItemsStyled = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

interface ICardData {
  name: string;
  story: string;
}
export const Board = () => {
  const [data, setData] = useState<ICardData[]>([]);
  const [error, setErrors] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch("https://inklusiiv-api.herokuapp.com/api/cards");

      data
        .json()
        .then((data) => setData(data))
        .catch((err) => setErrors(err));
    }

    fetchData();
  }, []);

  const cardData: ICardData[] | undefined = path(["data", "cards"], data);

  if (!data || data.length === 0) {
    return null;
  }

  return (
    <BoardStyled>
      <BoardItemsStyled>
        {cardData?.map((card, i) => (
          <Card key={i} name={card.name} story={card.story} />
        ))}
      </BoardItemsStyled>
    </BoardStyled>
  );
};

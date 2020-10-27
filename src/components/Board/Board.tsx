import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { pathOr } from "ramda";
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

const content =
  "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.";

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

  if (!data || data.length === 0) {
    return null;
  }

  return (
    <BoardStyled>
      <BoardItemsStyled>
        {data &&
          data.map((card, i) => (
            <Card key={i} name={card.name} story={card.story} />
          ))}
      </BoardItemsStyled>
    </BoardStyled>
  );
};

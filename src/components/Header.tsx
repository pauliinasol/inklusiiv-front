import React from "react";
import styled from "styled-components";
import { Nav } from "./Nav";

const HeaderStyled = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  background-color: white;
  height: 4em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 3em;
  padding-right: 3em;
`;

const SmallText = styled.div`
  color: black;
  font-size: 1.25em;
`;

export const Header = () => {
  return (
    <HeaderStyled>
      <SmallText>Inklusiiv Story Board</SmallText>
      <Nav />
    </HeaderStyled>
  );
};

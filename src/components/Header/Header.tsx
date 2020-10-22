import React from "react";
import styled from "styled-components";
import { Nav } from "../Nav/Nav";
import { SmallTextHeader } from "../../assets/Typography";
import { Link } from "react-router-dom";

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
  * {
    text-decoration: none;
  }
`;

export const Header = () => {
  return (
    <HeaderStyled>
      <Link to="/">
        <SmallTextHeader>Inklusiiv Story Board</SmallTextHeader>
      </Link>
      <Nav />
    </HeaderStyled>
  );
};

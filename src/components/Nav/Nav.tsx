import React from "react";
import styled from "styled-components";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";

const NavStyled = styled.div`
  display: flex;
  flex-direction: row;
  a {
    color: black;
    text-decoration: none;
  }
  > * {
    margin-left: 1.5em;
    :first-child {
      margin-left: 0;
    }
  }
`;

export const Nav = () => {
  return (
    <NavStyled>
      <Link to="/">
        <Button>Main</Button>
      </Link>

      <Link to="/board">
        <Button>Board</Button>
      </Link>

      <Button>Add your story</Button>
    </NavStyled>
  );
};

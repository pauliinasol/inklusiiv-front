import React from "react";
import styled from "styled-components";
import { Button } from "./Button";

const NavStyled = styled.div`
  display: flex;
  flex-direction: row;
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
      <Button>Main</Button>
      <Button>Board</Button>
      <Button>Add your story</Button>
    </NavStyled>
  );
};

import React, { FC } from "react";
import styled from "styled-components";

const ButtonStyled = styled.div`
  background-color: #f1c9b7;
  border-radius: 1.5em;
  padding: 0.65em;
  transition: 0.3s;

  :hover {
    background-color: #f2b12e;
    cursor: pointer;
  }
`;

interface IButtonProps {
  children: React.ReactNode;
  type?: string;
}

export const Button: FC<IButtonProps> = ({ children }) => {
  return <ButtonStyled>{children}</ButtonStyled>;
};

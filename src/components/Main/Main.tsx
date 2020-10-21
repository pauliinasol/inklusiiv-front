import React, { FC } from "react";
import styled from "styled-components";
import { HeaderOne, SmallText } from "../../assets/Typography";

import inklusiiv from "./inklusiiv.png";

const breakPointMaxMedium = "(max-width: 768px)";
const breakPointMaxLarge = "(max-width: 968px)";

const Container = styled.section`
  background: #f2efe3;
  display: flex;
  flex-direction: row;
  @media ${breakPointMaxMedium} {
    flex-direction: column;
  }
`;

const InnerContainer = styled.div`
  display: flex;
  align-items: left;
  /* justify-content: center; */
  padding: 2em;
  flex-direction: column;
  width: 50%;
  @media ${breakPointMaxMedium} {
    text-align: center;
    align-items: center;
    width: 100%;
    padding: 8em 2em;
  }
`;

const Image = styled.div`
  height: 100%;
  width: 50%;
  img {
    width: 100%;
  }
  @media ${breakPointMaxMedium} {
    width: 100%;
  }
`;

const Footer = styled.div`
  background-color: #fafafa;
  height: 15em;
`;

export const Main = () => (
  <>
    <Container>
      <InnerContainer>
        <HeaderOne>Hello world</HeaderOne>
        <SmallText>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.{" "}
        </SmallText>
      </InnerContainer>
      <Image>
        <img src={inklusiiv} alt={"Inklusiiv"} />
      </Image>
    </Container>
    <Footer />
  </>
);

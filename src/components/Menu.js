// Core imports
import React from "react";
import styled from "styled-components";

// Component imports
import Header from "./Header";
import orderMenu from "../images/menu.png";

const LayoutContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: 100%;
  @media (min-width: 500px) {
    width: 30%;
    margin-left: auto;
    margin-right: auto;
  }
`;

const StyledImg = styled.img`
  border-radius: 1.7rem;
  flex: 1;
`;

const Menu = () => {
  return (
    <LayoutContainer>
      <Header title="Menu" />
      <StyledImg src={orderMenu} />
    </LayoutContainer>
  );
};

export default Menu;

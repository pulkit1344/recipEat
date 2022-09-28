// Core imports
import React from "react";
import styled from "styled-components";

// Component imports
import Header from "./Header";
import noOrderLogo from "../images/no-order.png";

const LayoutContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 3rem 3rem 0 3rem;
`;
const StyledDiv = styled.div`
  background: #212121;
  box-shadow: 0rem 0.9rem 3.9rem rgba(0, 0, 0, 0.63);
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  flex: 1;
  gap: 20rem;
  padding: 0.8rem;
  @media (min-width: 500px) {
    width: 30%;
    margin-left: auto;
    margin-right: auto;
  }
`;

const Styledh4 = styled.h4`
  text-align: center;
  padding: 1rem;
  background: #3d3d3d;
  position: relative;
  margin: 0 auto;
  margin-bottom: 11.8rem;
  border-radius: 1rem;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 300;
  font-size: 1.4rem;
  line-height: 2rem;
  letter-spacing: -0.02em;
  color: #fafafa;
`;

const StyledContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.7rem;
  & span {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 2rem;
    letter-spacing: -0.02em;
    color: #737373;
  }
`;

const NoOrders = () => {
  return (
    <LayoutContainer>
      <Header title="Your table" />
      <StyledDiv>
        <Styledh4>TABLE #4</Styledh4>
        <StyledContentContainer>
          <img src={noOrderLogo} />
          <span>No Orders yet</span>
        </StyledContentContainer>
      </StyledDiv>
    </LayoutContainer>
  );
};

export default NoOrders;

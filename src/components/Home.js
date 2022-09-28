// Core imports
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

// Component imports
import Header from "./Header";
import mainLogo from "../images/home.png";
import arrowRight from "../images/arrow.png";

const LayoutContainer = styled.div`
  margin: 0 3rem;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const BodyContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const StyledDiv = styled.div`
  background: #212121;
  box-shadow: 0rem 0.9rem 3.9rem rgba(0, 0, 0, 0.63);
  border-radius: 1rem;

  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
  & > img {
    margin: 1.1rem 0.8rem 0.9rem 0.8rem;
    min-width: 28.5rem;
    min-height: 22rem;
  }
  & a {
    color: white;
  }
`;

const StyledButton = styled.button`
  color: #f9fbfc;
  background: linear-gradient(91.26deg, #f7162d 47.78%, #e4182a 74.08%);
  border-radius: 0.6rem;
  border: none;
  width: 18.2rem;
  height: 5rem;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2rem;
  display: flex;
  gap: 2.5rem;
  align-items: center;
  justify-content: center;
`;
const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  text-align: center;
  padding: 1.7rem 1.2rem 1.5rem 10.1rem;
  background: #191919;
  border-radius: 1rem;
  display: flex;
  gap: 1rem;
  & span {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 1.1rem;
    line-height: 1.4rem;
    color: #ffffff;
  }
`;

const Home = () => {
  let navigate = useNavigate();
  return (
    <LayoutContainer>
      <Header homeScreen={true} />
      <BodyContainer>
        <StyledDiv>
          <img src={mainLogo} />
          <StyledLink to="menu">
            <span>Browse Menu </span> <img src={arrowRight} />
          </StyledLink>
        </StyledDiv>
        <StyledButtonContainer>
          <StyledButton
            onClick={() => {
              if (Math.floor(Math.random() * 6) + 1 >= 2) {
                navigate("/table");
              } else {
                navigate("/no-order");
              }
            }}
          >
            Your Table <img src={arrowRight} />
          </StyledButton>
        </StyledButtonContainer>
      </BodyContainer>
    </LayoutContainer>
  );
};

export default Home;

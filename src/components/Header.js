// Core imports
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Component imports
import recipEatLogo from "../images/receipeat.png";
import userProfile from "../images/profile-circle.png";
import leftArrow from "../images/arrow-right.png";

const StyledHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5rem;
  margin-top: 7.7rem;
  & > span {
    color: white;
  }
  & .user {
    border-radius: 50%;
    height: 2.33rem;
    width: 2.33rem;
  }
  & .app-logo {
    width: 11.4rem;
    height: 2.7rem;
  }
`;

const StyledTitle = styled.h1`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 800;
  font-size: 3.2rem;
  line-height: 4.4rem;
  color: #fafafa;
`;

const Header = ({ title, navigateUrl = "/", homeScreen }) => {
  const navigate = useNavigate();
  const notify = () => {
    toast("Coming Soon!");
  };
  return (
    <>
      <StyledHeaderContainer>
        <span>
          {!homeScreen && (
            <img onClick={() => navigate(navigateUrl)} src={leftArrow} />
          )}
        </span>
        {homeScreen ? (
          <img className="app-logo" src={recipEatLogo} />
        ) : (
          <StyledTitle>{title} </StyledTitle>
        )}

        <img className="user" onClick={notify} src={userProfile} />
      </StyledHeaderContainer>
      <ToastContainer />
    </>
  );
};

export default Header;

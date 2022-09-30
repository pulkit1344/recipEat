// Core imports
import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import "./YourTable.css";

// Component imports
import Header from "./Header";

const LayoutContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 3rem 3rem 0 3rem;
`;

const StyledButton = styled.button`
  color: #f9fbfc;
  cursor: pointer;
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
  color: #f9fbfc;
`;

const StyledContainer = styled.div`
  background: #212121;
  box-shadow: 0rem 0.9rem 3.9rem rgba(0, 0, 0, 0.63);
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  flex: 1;
  padding: 0.8rem;
  @media (min-width: 500px) {
    width: 30%;
    margin-left: auto;
    margin-right: auto;
  }
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Styledh4 = styled.h4`
  text-align: center;
  padding: 1rem;
  background: #3d3d3d;
  position: relative;
  border-radius: 1rem;
  margin-bottom: 1.6rem;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 300;
  font-size: 1.4rem;
  line-height: 2rem;
  letter-spacing: -0.02em;
  color: #fafafa;
`;

const StyledItemsList = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr;
  color: white;
  gap: 1.2rem;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 2rem;
  letter-spacing: -0.02em;
  color: #fafafa;
  .second {
    text-align: center;
  }
  .third {
    text-align: end;
  }
  padding: 0 0.9rem;
  & .heading {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 1rem;
    line-height: 2rem;
    letter-spacing: -0.02em;
    color: #fafafa;
    opacity: 0.5;
  }
`;

const StyledRemainingCard = styled.div`
  color: white;
  overflow: hidden;
  margin-bottom: 3.5rem;
  border-radius: 1.7rem;
  background: #252525;
  border-top: 0.1rem solid rgba(0, 0, 0, 0.2);
  box-shadow: 0rem 0.7rem 4.5rem 1rem rgba(0, 0, 0, 0.42);
  padding-bottom: 2rem;

  & .remaining-total {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.9rem;
    margin-top: 1.8rem;
    & .label {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 300;
      font-size: 1.4rem;
      line-height: 2rem;
      letter-spacing: -0.02em;
      color: #fafafa;
    }
    & .price {
      font-family: "Manrope";
      font-style: normal;
      font-weight: 800;
      font-size: 2.4rem;
      line-height: 3.3rem;
      color: #fafafa;
    }
  }
  .remaining {
    background: #3b3b3b;
    padding: 1rem 0.9rem;
    margin-bottom: 0.7rem;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 1rem;
    line-height: 2rem;
    letter-spacing: -0.02em;
    color: #ffffff;
  }
`;

const StyledItemsListContainer = styled.div`
  padding: 1.6rem 0;
`;

const StyledDrawerContainer = styled.div`
  background: #212121;
  height: 100%;
  padding: 2rem;
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
  & span {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 2rem;
    letter-spacing: -0.02em;
    color: #fafafa;
    display: inline-block;
    margin-bottom: 2rem;
  }
  & div {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    & button {
      background: #e4182a;
      cursor: pointer;
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 1.6rem;
      letter-spacing: -0.02em;
      color: #fafafa;
      border: none;
      border-radius: 1rem;
      width: 9.1rem;
      height: 5.9rem;
    }
  }
`;

const StyledDrawer = styled(Drawer)`
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
`;

const YourTable = () => {
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = React.useState(false);
  let price = 0;
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const navigate = useNavigate();

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <LayoutContainer>
      <Header title="Your table" />
      <StyledContainer>
        <Styledh4>TABLE #4</Styledh4>
        <StyledItemsListContainer>
          <StyledItemsList>
            <span className="heading">ITEM</span>
            <span className="second heading">UNIT</span>
            <span className="third heading">PRICE</span>
            {data?.map((itm) => (
              <Fragment key={itm.id}>
                <span>{itm.item}</span>
                <span className="second">x{itm.unit}</span>
                <span className="third">${itm.price}</span>
              </Fragment>
            ))}
          </StyledItemsList>
        </StyledItemsListContainer>

        <StyledRemainingCard>
          <h6 className="remaining">REMAINING</h6>
          <StyledItemsList>
            {data
              ?.filter((itm) => itm.remaining)
              ?.map((itm) => {
                price = price + itm.price;
                return (
                  <Fragment key={itm.id}>
                    <span>{itm.item}</span>
                    <span className="second">x{itm.unit}</span>
                    <span className="third"> ${itm.price}</span>
                  </Fragment>
                );
              })}
          </StyledItemsList>
          <div className="remaining-total">
            <span className="label">Total Remaining</span>
            <span className="price">$ {price}</span>
          </div>
        </StyledRemainingCard>
        <StyledButtonContainer>
          <StyledButton onClick={toggleDrawer}>Pay bill</StyledButton>
        </StyledButtonContainer>
        <StyledDrawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="bottom"
          size={150}
          className="test"
        >
          <StyledDrawerContainer>
            <span>Select Type of Payment </span>
            <div>
              <button>Pay the rest</button>
              <button
                onClick={() => {
                  localStorage.setItem("payType", "select");
                  navigate("/payment");
                }}
              >
                Pay select items
              </button>
              <button
                onClick={() => {
                  localStorage.setItem("payType", "choice");
                  navigate("/payment-choice");
                }}
              >
                Pay your choice
              </button>
            </div>
          </StyledDrawerContainer>
        </StyledDrawer>
      </StyledContainer>
    </LayoutContainer>
  );
};

export default YourTable;

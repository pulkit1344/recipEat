// Core imports
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// Component imports
import Header from "./Header";
import plusImage from "../images/plus.png";
import subImage from "../images/sub.png";

const LayoutContainer = styled.div`
  padding: 0 3rem;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledContainer = styled.div`
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  background: #212121;
  box-shadow: 0rem 0.9rem 3.9rem rgba(0, 0, 0, 0.63);

  flex: 1;
  padding: 0.8rem;
  @media (min-width: 500px) {
    width: 40%;
    margin-left: auto;
    margin-right: auto;
  }
`;

const Styledh4 = styled.h4`
  text-align: center;
  padding: 1rem;
  background: #3d3d3d;
  position: relative;
  margin-bottom: 12rem;
  border-radius: 1rem;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 300;
  font-size: 1.4rem;
  line-height: 2rem;
  letter-spacing: -0.02em;
  color: #fafafa;
`;

const StyledButton = styled.button`
  color: #f9fbfc;
  cursor: pointer;
  background: linear-gradient(91.26deg, #f7162d 47.78%, #e4182a 74.08%);
  border-radius: 0.6rem;
  border: none;
  width: 17.2rem;
  height: 5rem;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const PriceBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 12rem;
  & .second {
    margin-top: 5.4rem;
  }

  & .first {
    gap: 4rem;
  }
  & .second {
    gap: 3rem;
  }
  & div {
    display: flex;
    justify-content: center;
    align-items: center;

    & button {
      background: #f9fafb;
      border: none;
      border-radius: 1rem;
      padding: 1rem 2rem;
      color: #6b7280;
      width: 2.8rem;
      height: 2.8rem;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
    & span {
      color: white;
    }
    & .change {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 400;
      font-size: 0.8rem;
      line-height: 1.1rem;
      color: #08080a;
      background: #ffffff;
      width: 10.5rem;
      height: 2.85rem;
      dispaly: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
    & .total {
      background: #212121;
      border: 1px solid white;
      dispaly: flex;
      justify-content: center;
      align-items: center;
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 400;
      font-size: 0.8rem;
      line-height: 1.1rem;
      color: #f9fbfc;
      width: 10.5rem;
      height: 2.85rem;
      cursor: pointer;
    }
    & .val {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 700;
      font-size: 3.2rem;
      line-height: 150%;
      letter-spacing: 0.02rem;

      color: #ffffff;
    }
  }
`;
const PaymentChoice = () => {
  const [paymentVal, setPaymentVal] = useState(
    () => +localStorage.getItem("totalPrice")
  );
  const navigate = useNavigate();
  return (
    <LayoutContainer>
      <Header navigateUrl="/table" title="Payment" />
      <StyledContainer>
        <Styledh4>Pay your Choice</Styledh4>
        <PriceBox>
          <div className="first">
            <button
              onClick={() => {
                if (paymentVal >= 1) {
                  setPaymentVal((prev) => prev - 1);
                  localStorage.setItem("totalPrice", paymentVal - 1);
                }
              }}
            >
              <img src={subImage} />
            </button>
            <span className="val">${paymentVal}</span>
            <button
              onClick={() => {
                setPaymentVal((prev) => prev + 1);
                localStorage.setItem("totalPrice", paymentVal + 1);
              }}
            >
              <img src={plusImage} />
            </button>
          </div>
          <div className="second">
            <button className="change">Change Bill</button>
            <button className="total">See Total</button>
          </div>
        </PriceBox>
        <StyledButtonContainer>
          <StyledButton onClick={() => navigate("/payment/tip")}>
            Confirm
          </StyledButton>
        </StyledButtonContainer>
      </StyledContainer>
    </LayoutContainer>
  );
};

export default PaymentChoice;

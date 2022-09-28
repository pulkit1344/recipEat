// Core imports
import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Component imports
import Header from "./Header";

const LayoutContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 3rem 3rem 0 3rem;
`;

const StyledContainer = styled.div`
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  padding: 0.8rem;
  flex: 1;
  background: #212121;
  box-shadow: 0rem 0.9rem 3.9rem rgba(0, 0, 0, 0.63);
  @media (min-width: 500px) {
    width: 30%;
    margin-left: auto;
    margin-right: auto;
  }
`;

const CreateAccountContainer = styled.div`
  border-radius: 1rem;
  padding: 1.8rem 1.5rem;
  background: #252525;

  box-shadow: 0rem 0.7rem 4.5rem 1rem rgba(0, 0, 0, 0.42);
`;

const StyledButton = styled.button`
  color: #f9fbfc;
  cursor: pointer;
  background: linear-gradient(91.26deg, #f7162d 47.78%, #e4182a 74.08%);
  border-radius: 0.3rem;
  border: none;
  width: 12.7rem;
  height: 3rem;
`;

const DetailsBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
  gap: 4.1rem;
  & span {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 700;
    font-size: 1.2rem;
    line-height: 1.6rem;
    color: #fafafa;
  }
`;

const AccountBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.4rem;
  & span {
    font-family: "Manrope";
    font-style: normal;
    font-weight: 800;
    font-size: 2rem;
    line-height: 2.9rem;

    color: #fafafa;
  }
  & .recipeat {
    color: #e4182a;
  }
`;

const EmailContainer = styled.div`
  margin-bottom: 2.4rem;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  & span {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 1rem;
    line-height: 2rem;
    letter-spacing: -0.02em;
    color: #ffffff;
  }
  & input {
    border: none;
    border-radius: 0.3rem;
    padding: 0.7rem;
  }
`;

const PaymentBox = styled.div`
  display: flex;
  background: #ffffff;
  border-radius: 1rem;
  align-items: center;
  padding: 1.4rem 2.4rem;
  margin-bottom: 3rem;
  & div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
  }
  & > span {
    font-family: "Manrope";
    font-style: normal;
    font-weight: 800;
    font-size: 2.4rem;
    line-height: 3.3rem;
    color: #212121;
    flex: 1;
    display: flex;
    justify-content: flex-end;
  }
  & .payment-label {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 2rem;
    letter-spacing: -0.02em;
    color: #212121;
  }
  & .table {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 300;
    font-size: 1rem;
    line-height: 2rem;
    letter-spacing: -0.02em;
    color: #5c5c5c;
  }
`;

const PriceBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.2rem;
  margin: 2.6rem 0;
  padding-left: 1.7rem;
  padding-right: 2.1rem;
  & div {
    display: flex;
    justify-content: space-between;
  }
  & span {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 2rem;
    letter-spacing: -0.02em;
    color: #ffffff;
  }
  & .tip-label {
    font-weight: 400;
  }
`;

const PaymentConfirmations = () => {
  const navigate = useNavigate();
  const totalPrice = +localStorage.getItem("totalPrice");
  const tip = +localStorage.getItem("tip");
  const notify = () => {
    localStorage.setItem("tip", "");
    localStorage.setItem("totalPrice", "");
    toast("Account created Successfully!");
    setTimeout(() => {
      navigate("/");
    }, 5000);
  };
  return (
    <LayoutContainer>
      <Header navigateUrl="/payment/tip" title="Payment" />
      <StyledContainer>
        <PriceBox>
          <div>
            <span>SUB TOTAL</span>
            <span>$ {totalPrice}</span>
          </div>
          <div>
            <span className="tip-label">TIP</span>
            <span>$ {tip.toPrecision(4)}</span>
          </div>
        </PriceBox>
        <PaymentBox>
          <div>
            <span className="payment-label">Your Payment</span>
            <span className="table">Table #4</span>
          </div>
          <span>$ {tip + totalPrice}</span>
        </PaymentBox>
        <EmailContainer>
          <span>Get your recipeat receipt</span>
          <input required type="email" placeholder="Enter your email" />
        </EmailContainer>
        <CreateAccountContainer>
          <AccountBox>
            <span>Create your</span>
            <span>
              <span className="recipeat">Recipeat </span>
              <span> account</span>
            </span>
          </AccountBox>

          <DetailsBox>
            <span>XXXXXX</span>
            <span>XXXXXX</span>
            <span>XXXXXX</span>
          </DetailsBox>
          <StyledButton onClick={notify}>Create my account</StyledButton>
        </CreateAccountContainer>
        <ToastContainer />
      </StyledContainer>
    </LayoutContainer>
  );
};

export default PaymentConfirmations;

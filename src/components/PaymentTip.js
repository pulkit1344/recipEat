// Core imports
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// Component imports
import gpay from "../images/gpay.png";
import applepay from "../images/apple.png";
import uncheckedImage from "../images/unchecked.png";
import selectedImage from "../images/bg.png";
import successImage from "../images/success.png";
import Header from "./Header";
import plusImage from "../images/plus.png";
import subImage from "../images/sub.png";

const LayoutContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 3rem 3rem 0 3rem;
`;

const StyledContainer = styled.div`
  border-top-left-radius: 0.7rem;
  border-top-right-radius: 0.7rem;
  border: 1px solid black;
  padding: 0.8rem;
  flex: 1;
  background: #212121;
  box-shadow: 0rem 0.9rem 3.9rem rgba(0, 0, 0, 0.63);

  & .leave-tip {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 1rem;
    line-height: 2rem;
    letter-spacing: -0.02em;
    color: #fafafa;
    opacity: 0.5;
    padding-left: 0.9rem;
    margin-bottom: 0.8rem;
    display: block;
  }

  & .payment-options-label {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 1rem;
    line-height: ;
    display: block;

    letter-spacing: -0.02em;
    margin-bottom: 1.3rem;
    color: #ffffff;
    padding: 0 0.9rem;
  }
`;
const PaymentContainer = styled.div`
  background: white;
  display: flex;
  border-radius: 1rem;
  justify-content: space-between;
  padding: 1.4rem 2.4rem;
  gap: 8rem;
  align-items: center;
  margin-bottom: 1rem;

  height: 6.8rem;
  & .first {
    display: flex;
    flex-direction: column;
  }
  & .price {
    font-family: "Manrope";
    font-style: normal;
    font-weight: 800;
    font-size: 2.4rem;
    line-height: 3.3rem;
    color: #212121;
  }
  & .label {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 2rem;
    letter-spacing: -0.02em;
    color: #212121;
    display: block;
  }
  & .table {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 300;
    font-size: 1rem;
    line-height: 2rem;
    letter-spacing: -0.02em;
    color: #5c5c5c;
    display: block;
  }
`;

const PercentageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3.2rem;
  padding: 0 0.5rem;
`;

const PercentageSpan = styled.span`
  background: ${(props) =>
    props.val === props.defaultVal ? "#5C5C5C" : "#2D2D2D"};
  border: ${(props) =>
    props.val === props.defaultVal
      ? "0.1rem solid rgba(255, 255, 255, 0.32)"
      : "none"};
  padding: 2rem 2rem;
  color: white;
  border-radius: 1rem;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 1.3rem;
  line-height: 150%;
  letter-spacing: 0.02rem;
  color: #ffffff;
`;

const StyledButton = styled.button`
  color: #f9fbfc;
  background: linear-gradient(91.26deg, #f7162d 47.78%, #e4182a 74.08%);
  border-radius: 0.6rem;
  border: none;
  width: 18.2rem;
  height: 5rem;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const PaymentOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-bottom: 4.2rem;
  & .apple-pay,
  & .google-pay {
    margin-left: 2rem;
  }
  & div {
    border: 0.1rem solid black;
    border-radius: 1rem;
    display: flex;
    gap: 1rem;
    padding: 0.6rem 1.8rem;
    align-items: center;
    & .last {
      margin-left: auto;
      position: relative;
      display: flex;
    }
    & .success {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    & span {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 400;
      font-size: 1.3rem;
      line-height: 150%;
      letter-spacing: 0.02rem;

      color: #f9fafb;
    }
    & img {
      display: inline-block;
      background: white;
      border-radius: 50%;
    }
  }
`;

const CustomTip = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.2rem;
  padding: 0 0.9rem;
  & div {
    display: flex;
    align-items: center;
    gap: 2.5rem;
    & button {
      border: none;
      border-radius: 1rem;
      padding: 1rem;
      width: 2.8rem;
      height: 2.8rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  & .label {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 1rem;
    line-height: 2rem;
    letter-spacing: -0.02em;
    color: #fafafa;

    opacity: 0.5;
  }
  & .value {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 1.3rem;
    line-height: 150%;
    text-align: center;
    letter-spacing: 0.02rem;

    color: #ffffff;

    opacity: 0.5;

    & button {
      background: #f9fafb;
      opacity: 0.5;
    }
  }
`;

const PaymentBox = styled.div`
  background: ${(props) =>
    props.selectedPaymentOption === props.default ? "#5C5C5C" : "#2D2D2D"};
`;

const PaymentTip = () => {
  const [val, setVal] = useState(10);
  const navigate = useNavigate();
  const totalPrice = +localStorage.getItem("totalPrice");
  const payType = localStorage.getItem("payType");
  const [selectedPaymentOption, setSelectedPaymentOption] = useState("");
  useEffect(() => {
    localStorage.setItem("tip", (val / 100) * totalPrice);
  }, [val, totalPrice]);

  return (
    <LayoutContainer>
      <Header
        navigateUrl={payType === "select" ? "/payment" : "/payment-choice"}
        title="Payment"
      />
      <StyledContainer>
        <PaymentContainer>
          <div className="first">
            <span className="label">Your Payment</span>
            <span className="table">TABLE #4</span>
          </div>
          <div className="price"> $ {totalPrice}</div>
        </PaymentContainer>
        <span className="leave-tip">LEAVE A TIP</span>
        <PercentageContainer>
          <PercentageSpan val={val} defaultVal={5} onClick={() => setVal(5)}>
            %5
          </PercentageSpan>
          <PercentageSpan val={val} defaultVal={10} onClick={() => setVal(10)}>
            %10
          </PercentageSpan>
          <PercentageSpan val={val} defaultVal={15} onClick={() => setVal(15)}>
            %15
          </PercentageSpan>
          <PercentageSpan val={val} defaultVal={20} onClick={() => setVal(20)}>
            %20
          </PercentageSpan>
        </PercentageContainer>
        <CustomTip>
          <span className="label">ADD CUSTOM TIP</span>
          <div>
            <button
              onClick={() => {
                if (val >= 1) {
                  setVal((prev) => prev - 1);
                }
              }}
            >
              <img src={subImage} />
            </button>
            <span className="value">{val} %</span>
            <button onClick={() => setVal((prev) => prev + 1)}>
              {" "}
              <img src={plusImage} />
            </button>
          </div>
        </CustomTip>
        <span className="payment-options-label">PAYMENT OPTIONS</span>
        <PaymentOptions>
          <PaymentBox
            selectedPaymentOption={selectedPaymentOption}
            default="apple"
            onClick={() => setSelectedPaymentOption("apple")}
          >
            <img src={applepay} height="31px" />
            <span className="apple-pay">Apple Pay</span>
            <span className="last">
              <img
                src={
                  selectedPaymentOption === "apple"
                    ? selectedImage
                    : uncheckedImage
                }
              />
              {selectedPaymentOption === "apple" && (
                <img className="success" src={successImage} />
              )}
            </span>
          </PaymentBox>
          <PaymentBox
            default="google"
            selectedPaymentOption={selectedPaymentOption}
            onClick={() => setSelectedPaymentOption("google")}
          >
            <img src={gpay} height="31px" />
            <span className="google-pay">Google Pay</span>
            <span className="last">
              <img
                src={
                  selectedPaymentOption === "google"
                    ? selectedImage
                    : uncheckedImage
                }
              />
              {selectedPaymentOption === "google" && (
                <img className="success" src={successImage} />
              )}
            </span>
          </PaymentBox>
        </PaymentOptions>
        <StyledButtonContainer>
          <StyledButton onClick={() => navigate("/payment/confirmation")}>
            Make Payment
          </StyledButton>
        </StyledButtonContainer>
      </StyledContainer>
    </LayoutContainer>
  );
};

export default PaymentTip;

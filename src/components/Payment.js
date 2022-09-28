// Core imports
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// Component imports
import Header from "./Header";

const StyledContainer = styled.div`
  flex: 1;
  border-top-left-radius: 1.7rem;
  border-top-right-radius: 1.7rem;
  background: #212121;
  box-shadow: 0rem 0.9rem 3.9rem rgba(0, 0, 0, 0.63);
`;
const Styledh4 = styled.h4`
  text-align: center;
  padding: 1rem;
  background: #3d3d3d;
  position: relative;
  top: 0.8rem;
  height: 4.6rem;
  margin: 0 0.8rem;
  border-radius: 1rem;
  color: white;
  margin-bottom: 2.6rem;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 300;
  font-size: 1.4rem;
  line-height: 2rem;

  letter-spacing: -0.02em;
  color: #fafafa;
`;

const LayoutContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledItemsList = styled.div`
  display: grid;
  gap: 1.8rem;
  grid-template-columns: 3fr 1fr;
  color: white;
  .second {
    text-align: end;
  }
  padding: 0 2rem;
  margin-bottom: 3rem;
  .header {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 1rem;
    line-height: 2rem;

    letter-spacing: -0.02em;

    color: #fafafa;

    opacity: 0.5;
  }
  .list-itm {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 2rem;

    letter-spacing: -0.02em;

    color: #fafafa;
  }
  & input {
    background: rgba(59, 59, 59, 0.8);
    border-radius: 0.3rem;
    height: 2.4rem;
    width: 2.4rem;
  }
  & input:checked {
    accent-color: #212121;
    outline: 1px solid white;
  }
  & .itm-box {
    display: flex;
    gap: 10px;
    align-items: center;
  }
`;

const ItemContainer = styled.div`
  & .remaining-total {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    color: white;
    margin-bottom: 4.2rem;

    & .amount-payable {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 300;
      font-size: 1.4rem;
      line-height: 2rem;

      letter-spacing: -0.02em;

      color: #fafafa;
    }
    & .amount {
      font-family: "Manrope";
      font-style: normal;
      font-weight: 800;
      font-size: 2.4rem;
      line-height: 3.3rem;

      color: #fafafa;
    }
  }
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

const StyledBillButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 3.1rem;
  margin-bottom: 6.9rem;
  .change-btn {
    background: #ffffff;
    color: #08080a;
    border-radius: 0.5rem;
    border: none;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 0.8rem;
    line-height: 1.1rem;
    width: 10.5rem;
    height: 2.85rem;
  }

  .see-total {
    background: #212121;
    border-radius: 0.5rem;
    border: 1px solid white;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 0.8rem;
    line-height: 1.1rem;
    width: 10.5rem;
    height: 2.85rem;
    color: #f9fbfc;
  }
`;

const StyledH6 = styled.h6`
  background: #3b3b3b;
  padding: 1rem 2rem;
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
  line-height: 2rem;
  letter-spacing: -0.02em;
  color: #ffffff;
  font-family: "Montserrat";
  margin-bottom: 1.2rem;
`;

const Payment = () => {
  const [data, setData] = useState([]);
  const [checkedState, setCheckedState] = useState([]);
  const [total, setTotal] = useState(0);

  const navigate = useNavigate();
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setCheckedState(
          new Array(data?.filter((itm) => itm.remaining).length).fill(false)
        );
      });
  }, []);

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);

    const totalPrice = updatedCheckedState.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          return sum + data?.filter((itm) => itm.remaining)?.[index].price;
        }
        return sum;
      },
      0
    );

    setTotal(totalPrice);
    localStorage.setItem("totalPrice", totalPrice);
  };

  return (
    <LayoutContainer>
      <Header navigateUrl="/table" title="Payment" />
      <StyledContainer>
        <Styledh4>Choose article to Pay</Styledh4>
        <StyledH6>Remaining</StyledH6>
        <ItemContainer>
          <StyledItemsList>
            <span className="header">ITEM</span>
            <span className="second header">PRICE</span>
            {data
              ?.filter((itm) => itm.remaining)
              ?.map((itm, index) => (
                <>
                  <span className="itm-box">
                    {" "}
                    <input
                      type="checkbox"
                      id={`custom-checkbox-${index}`}
                      name={itm.name}
                      value={itm.name}
                      checked={checkedState[index]}
                      onChange={() => handleOnChange(index)}
                    />{" "}
                    <span className="list-itm">{itm.item}</span>
                  </span>
                  <span className="second list-itm">${itm.price}</span>
                </>
              ))}
          </StyledItemsList>
          <div className="remaining-total">
            <span className="amount-payable">Amount Payable</span>
            <span className="amount">$ {total}</span>
          </div>
        </ItemContainer>
        <StyledBillButtons>
          <button className="change-btn">Change Bill</button>
          <button className="see-total">See Total</button>
        </StyledBillButtons>
        <StyledButtonContainer>
          <StyledButton onClick={() => navigate("/payment/tip")}>
            Confirm
          </StyledButton>
        </StyledButtonContainer>
      </StyledContainer>
    </LayoutContainer>
  );
};

export default Payment;

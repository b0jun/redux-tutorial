import React from "react";
import styled from "styled-components";

const Block = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Number = styled.h1`
  font-size: 10rem;
  margin-bottom: 1rem;
`;
const Wrapper = styled.div``;
const Button = styled.button`
  margin-left: 1rem;
  margin-right: 1rem;
  border: none;
  outline: none;
  border-radius: 10px;
  font-size: 2rem;
  background: #ad9d9d;
  width: 3rem;
  cursor: pointer;
`;
const Counter = ({ number, onIncrease, onDecrease }) => {
  return (
    <Block>
      <Number>{number}</Number>
      <Wrapper>
        <Button onClick={onIncrease}>+1</Button>
        <Button onClick={onDecrease}>-1</Button>
      </Wrapper>
    </Block>
  );
};

export default Counter;

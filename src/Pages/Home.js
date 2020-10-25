import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Block = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  color: #222831;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
const Item = styled.div`
  width: 10rem;
  height: 3rem;
  background: #ff9a76;
  border-radius: 10px;
  margin-bottom: 2rem;
  display: flex;
`;
const SLink = styled(Link)`
  width: 100%;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #222831;
`;

const Home = () => {
  return (
    <Block>
      <Title>Redux Tutorial</Title>
      <Wrapper>
        <Item>
          <SLink to='/counter'>Counter</SLink>
        </Item>
        <Item>
          <SLink to='/todos'>Todos</SLink>
        </Item>
        <Item>
          <SLink to='/sample'>Sample</SLink>
        </Item>
      </Wrapper>
    </Block>
  );
};

export default Home;

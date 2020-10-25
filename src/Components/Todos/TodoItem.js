import React from 'react';
import styled from 'styled-components';

const Block = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  padding: 10px 15px;
  border-radius: 3px;
  &:hover {
    background: #eaeaea;
  }
`;
const Text = styled.span`
  font-size: 20px;
`;
const Button = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  padding: 3px 5px;
  background: #ffaaa5;
  color: white;
  border-radius: 3px;
  font-weight: 700;
  transition: background 100ms ease-in-out;
  &:hover {
    background: #ff9999;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
const TodoItem = ({ todo, onToggle, onRemove }) => {
  return (
    <Block>
      <Wrapper>
        <input
          type='checkbox'
          onClick={() => onToggle(todo.id)}
          checked={todo.done}
          readOnly={true}
        />
        <Text>#{todo.id}</Text>
        <Text style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
          {todo.text}
        </Text>
      </Wrapper>
      <Button onClick={() => onRemove(todo.id)}>삭제</Button>
    </Block>
  );
};

export default TodoItem;

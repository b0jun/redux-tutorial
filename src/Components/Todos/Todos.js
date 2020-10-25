import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const Block = styled.div`
  width: 50%;
  min-width: 400px;
  margin: 0 auto;
`;
const Form = styled.form`
  background: #f9f7f7;
  padding: 50px 70px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`;
const Input = styled.input`
  width: 70%;
  border: none;
  outline: none;
  background: #ffe2e2;
  padding: 15px;
  margin-right: 10px;
  border-radius: 3px;
`;
const Button = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  background: #ffaaa5;
  color: white;
  border-radius: 3px;
  font-weight: 700;
  transition: background 100ms ease-in-out;
  &:hover {
    background: #ff9999;
  }
`;

const ItemWrapper = styled.div`
  background: #f9f7f7;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
`;

const Todos = ({
  input,
  todos,
  onChangeInput,
  onInsert,
  onToggle,
  onRemove,
}) => {
  const onSubmit = (e) => {
    e.preventDefault();
    onInsert(input);
    onChangeInput(''); // 등록 후 인풋 초기화
  };
  const onChange = (e) => onChangeInput(e.target.value);
  return (
    <Block>
      <Form onSubmit={onSubmit}>
        <Input
          value={input}
          onChange={onChange}
          placeholder='일정을 입력하세요.'
        />
        <Button type='submit'>등록</Button>
      </Form>
      <ItemWrapper>
        {todos.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            onToggle={onToggle}
            onRemove={onRemove}
          />
        ))}
      </ItemWrapper>
    </Block>
  );
};

export default Todos;

import React from 'react';
import { connect } from 'react-redux';
import Counter from '../../Components/Counter/Counter';
import { increase, decrease } from '../../modules/counter';

const CounterContainer = ({ number, increaseAsync, decreaseAsync }) => {
  return (
    <Counter
      number={number}
      onIncrease={increaseAsync}
      onDecrease={decreaseAsync}
    />
  );
};

export default connect(
  (state) => ({
    number: state.counter.number,
  }),
  {
    increaseAsync,
    decreaseAsync,
  }
)(CounterContainer);

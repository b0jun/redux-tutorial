import { createAction, handleActions } from 'redux-actions';

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

/* #1 일반적인 액션 생성 함수 */
// export const increase = () => ({ type: INCREASE });
// export const decrease = () => ({ type: DECREASE });

/* #2 redux-actions의 createAction 사용 */
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

const initialState = {
  number: 0,
};

/* #1 리듀서 함수 */
// function counter(state = initialState, action) {
//   switch (action.type) {
//     case INCREASE:
//       return {
//         ...state,
//         number: state.number + 1,
//       };
//     case DECREASE:
//       return {
//         ...state,
//         number: state.number - 1,
//       };
//     default:
//       return state;
//   }
// }

/* #2 redux-actions의 handleActions 사용 */
const counter = handleActions(
  {
    [INCREASE]: (state, action) => ({ number: state.number + 1 }),
    [DECREASE]: (state, action) => ({ number: state.number - 1 }),
  },
  initialState
);

export default counter;

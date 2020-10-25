import { createAction, handleActions } from 'redux-actions';

const CHANGE_INPUT = 'todos/CHANGE_INPUT';
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

/* #1 일반적인 액션 생성 함수 */
// export const changeInput = (input) => ({
//   type: CHANGE_INPUT,
//   input,
// });

// let id = 1;
// export const insert = (text) => ({
//   type: INSERT,
//   todo: {
//     id: id++,
//     text,
//     done: false,
//   },
// });

// export const toggle = (id) => ({
//   type: TOGGLE,
//   id,
// });

// export const remove = (id) => ({
//   type: REMOVE,
//   id,
// });

/* #2 redux-actions의 createAction 사용 */
export const changeInput = createAction(CHANGE_INPUT, (input) => input);

let id = 1;
export const insert = createAction(INSERT, (text) => ({
  id: id++,
  text,
  done: false,
}));
export const toggle = createAction(TOGGLE, (id) => id);
export const remove = createAction(REMOVE, (id) => id);

const initialState = {
  input: '',
  todos: [],
};

/* #1 리듀서 함수 */
// function todos(state = initialState, action) {
//   switch (action.type) {
//     case CHANGE_INPUT:
//       return {
//         ...state,
//         input: action.input,
//       };
//     case INSERT:
//       return {
//         ...state,
//         todos: state.todos.concat(action.todo),
//       };
//     case TOGGLE:
//       return {
//         ...state,
//         todos: state.todos.map((todo) =>
//           todo.id === action.id ? { ...todo, done: !todo.done } : todo
//         ),
//       };
//     case REMOVE:
//       return {
//         ...state,
//         todos: state.todos.filter((todo) => todo.id !== action.id),
//       };
//     default:
//       return state;
//   }
// }

/* #2 redux-actions의 handleActions 사용 */
// const todos = handleActions(
//   {
//     [CHANGE_INPUT]: (state, action) => ({ ...state, input: action.payload }),
//     [INSERT]: (state, action) => ({
//       ...state,
//       todos: state.todos.concat(action.payload),
//     }),
//     [TOGGLE]: (state, action) => ({
//       ...state,
//       todos: state.todos.map((todo) =>
//         todo.id === action.payload ? { ...todo, done: !todo.done } : todo
//       ),
//     }),
//     [REMOVE]: (state, action) => ({
//       ...state,
//       todos: state.todos.filter((todo) => todo.id !== action.id),
//     }),
//   },
//   initialState
// );

/* #2-1 payload 비구조화 할당으로 이름 지정 */
const todos = handleActions(
  {
    [CHANGE_INPUT]: (state, { payload: input }) => ({ ...state, input }),
    [INSERT]: (state, { payload: todo }) => ({
      ...state,
      todos: state.todos.concat(todo),
    }),
    [TOGGLE]: (state, { payload: id }) => ({
      ...state,
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      ),
    }),
    [REMOVE]: (state, { payload: id }) => ({
      ...state,
      todos: state.todos.filter((todo) => todo.id !== id),
    }),
  },
  initialState
);
export default todos;

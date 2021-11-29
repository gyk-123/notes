import { INCREMENT, DECREMENT } from "../const/counter";

export const increment = payload => ({ type: INCREMENT, payload });
export const decrement = payload => ({ type: DECREMENT, payload });

export const increment_async = payload => dispatch => {
  setTimeout(() => dispatch(increment(payload)), 2 * 1000);
}
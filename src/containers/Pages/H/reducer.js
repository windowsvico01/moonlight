/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { NUM_COUNT } from './actions';

// The initial state of the App
export const initialState = {
  hi: 'hihihihiihihi',
  count: 1,
};
/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case NUM_COUNT:
        // Delete prefixed '@' from the github username
        draft.count += action.num;
        break;
    }
  });

// const homeReducer = (state = initialState, action) => {
//   return state;
// };

export default homeReducer;

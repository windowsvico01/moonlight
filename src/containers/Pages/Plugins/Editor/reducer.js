import produce from 'immer';
import { CONTENT_CHANGE } from './action';

// The initial state of the App
export const initialState = {
  content: '',
};

/* eslint-disable default-case, no-param-reassign */
const EditorReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CONTENT_CHANGE:
        // Delete prefixed '@' from the github username
        draft.content = action.content;
        break;
    }
  });

// const listReducer = (state = initialState, action) => {
//   return state;
// };

export default EditorReducer;
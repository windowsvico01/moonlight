import { createSelector } from 'reselect';
// state.get 是异步的
const selectEditorDomain = state => state.get('Plugins/Editor');
const selectContent = createSelector(
    selectEditorDomain,
  (subState) => subState && subState.content,
)

export {
  selectContent
}
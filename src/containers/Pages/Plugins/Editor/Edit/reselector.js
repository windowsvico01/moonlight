import { createSelector } from 'reselect';
const selectEditDomain = state => state.get('Plugins/Editor/Edit');
const selectContent = createSelector(
    selectEditDomain,
  (subState) => subState && subState.content,
)

export {
  selectContent
}
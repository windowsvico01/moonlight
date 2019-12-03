import { createSelector } from 'reselect';
// state.get 是异步的
const selectPluginsDomain = state => state.get('Plugins');
const selectContent = createSelector(
  selectPluginsDomain,
  (subState) => subState && subState.content,
)

export {
  selectContent
}
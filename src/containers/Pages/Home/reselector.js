import { createSelector } from 'reselect';
// state.get 是异步的
const selectHiDomain = state => state.get('Hi');
const selectHi = createSelector(
  selectHiDomain,
  (subState) => subState && subState.hi,
)
const selectCount = createSelector(
  selectHiDomain,
  (subState) => subState && subState.count,
)

export {
  selectHi,
  selectCount,
}
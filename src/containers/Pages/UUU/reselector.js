import { createSelector } from 'reselect';

const selectHiDomain = state => state.get('Hi');
const selectHi = createSelector(
  selectHiDomain,
  (subState) => subState.hi,
)
const selectCount = createSelector(
  selectHiDomain,
  (subState) => subState.count,
)

export {
  selectHi,
  selectCount,
}
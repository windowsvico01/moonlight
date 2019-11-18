import { createSelector } from 'reselect';

const selectRouterDomain = state => state.get('router');
const get = createSelector(
  selectHiDomain,
  (subState) => subState.hi,
)

export {
  selectHiDomain
}
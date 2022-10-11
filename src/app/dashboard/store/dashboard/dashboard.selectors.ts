import { createFeatureSelector, createSelector } from '@ngrx/store';
import { dashboardFeatureState, DashboardState } from './dashboard.state';

const featureSelector = createFeatureSelector<DashboardState>(dashboardFeatureState);

export const getHeaderState = createSelector(
  featureSelector,
  (state: DashboardState) => state.headerStatus.status
);

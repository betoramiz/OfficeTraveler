import { HeaderStatusModel } from './models/header-status.model';

export const dashboardFeatureState = 'Dashboard';

export interface DashboardState {
  headerStatus: HeaderStatusModel;
}

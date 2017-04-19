import { RouterModule, Routes } from '@angular/router';
import { LoginRoutes, AUTH_PROVIDERS } from './auth/login/login.routes';
import { DashboardRoutes } from './pages/dashboard/dashboard.routes';
import { UsersRoutes } from './pages/users/users.routes';
import { AccountsRoutes } from './pages/accounts/accounts.routes';
import { TeamRoutes } from './pages/team/team.routes';

export const routes: Routes = [
  ...DashboardRoutes,
  ...LoginRoutes,
  ...UsersRoutes,
  ...AccountsRoutes,
  ...TeamRoutes
];

export const AppRoutingModule = RouterModule.forRoot(routes)

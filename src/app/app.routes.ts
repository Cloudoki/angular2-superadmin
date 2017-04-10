import { RouterModule, Routes } from '@angular/router';
import { LoginRoutes, AUTH_PROVIDERS } from './auth/login/login.routes';
import { DashboardRoutes } from './dashboard/dashboard.routes';
import { UsersRoutes } from './users/users.routes';
import { AccountsRoutes } from './accounts/accounts.routes';
import { TeamRoutes } from './team/team.routes';

export const routes: Routes = [
  ...DashboardRoutes,
  ...LoginRoutes,
  ...UsersRoutes,
  ...AccountsRoutes,
  ...TeamRoutes
];

export const AppRoutingModule = RouterModule.forRoot(routes)

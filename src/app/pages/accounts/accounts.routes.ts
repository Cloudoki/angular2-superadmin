import { AuthGuard }  from '../../auth/auth.guard';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './accounts.component';

export const AccountsRoutes: Routes = [
  { path: 'accounts', component: AccountsComponent, canActivate: [AuthGuard] }
];

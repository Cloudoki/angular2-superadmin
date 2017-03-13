import { AuthGuard }  from '../auth/auth.guard';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';

export const UsersRoutes: Routes = [
  { path: 'users', component: UsersComponent, canActivate: [AuthGuard] }
];

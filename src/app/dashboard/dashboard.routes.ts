import { AuthGuard }     				from '../auth/auth.guard';
import { RouterModule, Routes }         from '@angular/router';
import { DashboardComponent }   from './dashboard.component';

export const DashboardRoutes: Routes = [
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' }, //terminal: true
	{ path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] }
];

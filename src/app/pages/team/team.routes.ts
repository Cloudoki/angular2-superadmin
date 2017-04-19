import { AuthGuard }  from '../../auth/auth.guard';
import { RouterModule, Routes } from '@angular/router';
import { TeamComponent } from './team.component';

export const TeamRoutes: Routes = [
  { path: 'team', component: TeamComponent, canActivate: [AuthGuard] }
];

import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { AccountComponent } from './components/account/account.component';
import { PreferencesComponent } from './components/preferences/preferences.component';

export const routes: Routes = [ 
    
    { path: '',   redirectTo: '/dashboard', pathMatch: 'full' },
    {path: 'dashboard', component: DashboardComponent },
    {path: 'projects', component: ProjectsComponent },
    {path: 'tasks', component: TasksComponent },
    {path: 'account', component: AccountComponent},
    {path: 'preferences', component:PreferencesComponent}
    ];

    // path: '**', component: ProjectsComponent },

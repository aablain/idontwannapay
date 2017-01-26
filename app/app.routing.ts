import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { SpecificProjectComponent } from './specific-project/specific-project.component';
import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes = [   {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'projects-list', //marketplace
    component: ProjectsListComponent
  },
  {
    path: 'specific-project/:itsKey',
    component: SpecificProjectComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

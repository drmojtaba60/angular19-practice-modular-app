import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TaskListComponent} from './pages/task-list.component';

const routes: Routes = [
  { path: '', component: TaskListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskManagerRoutesModule { }



/*standalon*/
// src/app/modules/admin/user-manager/user-manager.routes.ts


export const UserManagerRoutesAsStandAlon: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/task-list.component')
      .then(m => m.TaskListComponent)
  }
];


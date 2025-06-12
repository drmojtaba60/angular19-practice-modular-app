import { Routes } from '@angular/router';
import { TaskListComponent } from '../task-manager/pages/task-list.component';

export const HOME_ROUTES: Routes = [
  {
    path: '',
    component: TaskListComponent
  }
];

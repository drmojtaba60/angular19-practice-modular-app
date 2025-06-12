import { Routes } from '@angular/router';
import { TaskListComponent } from './pages/task-list.component';

export const TASK_MANAGER_ROUTES: Routes = [
  {
    path: '',
    component: TaskListComponent
  }
];

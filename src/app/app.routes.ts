import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/home/home.routes').then(m => m.HOME_ROUTES)
  },
  {
    path: 'tasks',
    loadChildren: () =>
      import('./features/task-manager/task-manager.routes').then(m => m.TASK_MANAGER_ROUTES)
  },
  // سایر مسیرها...
];

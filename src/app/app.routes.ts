import {Routes} from '@angular/router';

export const routes0: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/home/home.routes').then(m => m.HOME_ROUTES)
  },
  {
    path: 'tasks',
    loadChildren: () =>
      import('./features/task-manager/task-manager.routes').then(m => m.UserManagerRoutesAsStandAlon)
    //loadChildren: () =>import('./features/task-manager/task-manager.module').then(m=>m.UserManagerModule)
  },
  // سایر مسیرها...
];

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layout/main-layout.component').then(m => m.MainLayoutComponent),
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./features/home/home.routes').then(m => m.HOME_ROUTES)
      },
      {
        path: 'users',
        loadChildren: () =>import('./features/user-manager/user-manager.routes').then(m=>m.USER_ROUTES)
      },
      {
        path: 'tasks',
        loadChildren: () =>
          import('./features/task-manager/task-manager.routes').then(m => m.UserManagerRoutesAsStandAlon)
        //loadChildren: () =>import('./features/task-manager/task-manager.module').then(m=>m.UserManagerModule)
      }
    ]
  },
  // سایر مسیرها...
];

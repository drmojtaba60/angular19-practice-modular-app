import { Routes } from '@angular/router';
//import { provideRouter } from '@angular/router';

export const USER_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./user.component').then(m => m.UserComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/user-list.component').then(m => m.UserListComponent)
      },
      {
        path: ':id',
        loadComponent: () => import('./pages/user-details.component').then(m => m.UserDetailsComponent)
      }
    ]
  }
];

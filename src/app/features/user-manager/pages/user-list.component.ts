import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-user-list',
  imports: [RouterModule],
  template: `
    <h3>📃 User List</h3>
    <ul>
      <li><a routerLink="1">User 1</a></li>
      <li><a routerLink="2">User 2</a></li>
    </ul>
  `
})
export class UserListComponent {}

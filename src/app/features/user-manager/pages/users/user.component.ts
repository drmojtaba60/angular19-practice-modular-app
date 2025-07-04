import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './components/user-list/user-list.component';

@Component({
  standalone: true,
  selector: 'app-users',
  imports: [CommonModule, UserListComponent],
  templateUrl: './user.component.html',
})
export class UsersComponent {}

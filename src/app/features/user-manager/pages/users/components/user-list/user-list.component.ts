import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UserActionsComponent } from './components/user-actions/user-actions.component';

@Component({
  standalone: true,
  selector: 'app-user-list',
  imports: [CommonModule, UserCardComponent, UserActionsComponent],
  templateUrl: './user-list.component.html',
})
export class UserListComponent {
  users = [
    { name: 'علی', email: 'ali@example.com' },
    { name: 'سارا', email: 'sara@example.com' },
  ];
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-user',
  imports: [RouterOutlet],
  template: `
    <h2>👤 User Module</h2>
    <router-outlet></router-outlet>
  `
})
export class UserComponent {}

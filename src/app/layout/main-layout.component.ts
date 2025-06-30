import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <header style="background:#eee; padding:1rem;">
      <h1>🌐 My App Layout</h1>
      <nav>
        <a routerLink="/" routerLinkActive="active">Dashboard</a> |
        <a routerLink="/users" routerLinkActive="active">Users</a> |
        <a routerLink="/products" routerLinkActive="active">Products</a>
      </nav>
    </header>

    <main style="padding: 1rem;">
      <router-outlet></router-outlet>
    </main>

    <footer style="background:#eee; padding:1rem;">© 2025</footer>
  `
})
export class MainLayoutComponent {}

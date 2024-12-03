import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-side-nav',
    imports: [CommonModule],
    template: `
    <nav class="side-nav" [class.open]="isOpen">
      <div class="nav-content">
        <div class="nav-group">
          <h3>Main Menu</h3>
          <a href="#" class="nav-item">Dashboard</a>
          <a href="#" class="nav-item">Projects</a>
          <a href="#" class="nav-item">Tasks</a>
        </div>
        <div class="nav-group">
          <h3>Settings</h3>
          <a href="#" class="nav-item">Account</a>
          <a href="#" class="nav-item">Preferences</a>
        </div>
      </div>
    </nav>
  `,
    styles: [
        `
    .side-nav {
      position: fixed;
      top: 60px;
      left: -250px;
      width: 250px;
      height: calc(100vh - 60px);
      background-color: white;
      color: white;
      transition: left 0.3s ease;
      z-index: 900;
    }

    .side-nav.open {
      left: 0;
    }

    .nav-content {
      padding: 1rem;
    }

    .nav-group {
      margin-bottom: 2rem;
    }

    .nav-group h3 {
      font-size: 0.9rem;
      color: #21272A;
      text-transform: uppercase;
      margin-bottom: 0.5rem;
    }

    .nav-item {
      display: block;
      color: #21272A;
      text-decoration: none;
      padding: 0.5rem 0;
      transition: color 0.2s ease;
    }

    .nav-item:hover {
      color: #3498db;
    }
  `,
    ]
})
export class SideNavComponent {
  @Input() isOpen = false;
}

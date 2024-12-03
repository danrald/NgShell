import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-top-nav',
    imports: [CommonModule],
    template: `
    <nav class="top-nav">
      <button class="menu-button" (click)="toggleSidenav.emit()">
        ☰
      </button>
      <h1 class="title">My App</h1>
      <div class="nav-items">
        <a href="#">Home</a>
        <a href="#">Profile</a>
        <a href="#">Settings</a>
      </div>
    </nav>
  `,
    styles: [`
    .top-nav {
      display: flex;
      align-items: center;
      padding: 1rem;
      background-color: #2c3e50;
      color: white;
      height: 60px;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
    }

    .menu-button {
      background: none;
      border: none;
      color: white;
      font-size: 1.5rem;
      cursor: pointer;
      padding: 0.5rem;
    }

    .title {
      margin: 0 1rem;
      font-size: 1.2rem;
    }

    .nav-items {
      margin-left: auto;
    }

    .nav-items a {
      color: white;
      text-decoration: none;
      margin-left: 1.5rem;
    }

    .nav-items a:hover {
      text-decoration: underline;
    }
  `]
})
export class TopNavComponent {
  @Output() toggleSidenav = new EventEmitter<void>();
}
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from '../../components/top-nav/top-nav.component';
import { SideNavComponent } from '../../components/side-nav/side-nav.component';

@Component({
    selector: 'app-main-layout',
    imports: [CommonModule, TopNavComponent, SideNavComponent],
    template: `
    <div class="layout">
      <app-top-nav (toggleSidenav)="toggleSidenav()"></app-top-nav>
      <app-side-nav [isOpen]="isSidenavOpen"></app-side-nav>
      <main class="main-content" [class.shifted]="isSidenavOpen">
        
        <ng-content></ng-content>
      </main>
    </div>
  `,
    styles: [
        `
    .layout {
      min-height: 100vh;
    }

    .main-content {
      margin-top: 60px;
      padding: 2rem;
      transition: margin-left 0.3s ease;
    }

    .main-content.shifted {
      margin-left: 250px;
    }
  `,
    ]
})
export class MainLayoutComponent {
  isSidenavOpen = false;

  toggleSidenav() {
    this.isSidenavOpen = !this.isSidenavOpen;
  }
}

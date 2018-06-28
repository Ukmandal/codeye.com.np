import { Component, Input } from '@angular/core';
import { navItems } from './../../_nav';
import { AuthService } from '../../views/authentication/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public navItems = navItems;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement = document.body;
  isloginSuceeded: boolean = false;

  constructor(
    private authService: AuthService,
  ) {
    this.changes = new MutationObserver(() => {
      this.sidebarMinimized = document.body.classList.contains('sidebar-minimized')
    });

    this.changes.observe(<Element>this.element, {
      attributes: true
    });
  }

  ngAfterViewInit() {
    this.authService.onLoginSuccess.subscribe(x => {
      this.isloginSuceeded = x !== undefined;
    })
  }
}

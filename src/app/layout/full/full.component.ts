import { Component, OnInit } from '@angular/core';
import { INavData } from '@coreui/angular';
import { AuthService } from '../../shared/services/auth.service';
import { TypeMenuService } from '../../shared/services/type-menu.service';

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styles: [
  ]
})
export class FullComponent {

  public sidebarMinimized = false;
  public navItems: INavData[] = [];

  constructor(public auth: AuthService, private menu: TypeMenuService) {
    this.navItems = menu.getMenu();
  }

  toggleMinimize(e: any): void {
    this.sidebarMinimized = e;
  }

}

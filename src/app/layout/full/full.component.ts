import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styles: [
  ]
})
export class FullComponent {

  public sidebarMinimized = false;
  public navItems = [];

  constructor(public auth: AuthService) {
    console.log("🚀 ~ file: full.component.ts ~ line 16 ~ FullComponent ~ constructor ~ auth", auth.getUser());
  }

  toggleMinimize(e: any) {
    this.sidebarMinimized = e;
  }

}

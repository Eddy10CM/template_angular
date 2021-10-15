import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styles: [
  ]
})
export class FullComponent {

  public sidebarMinimized = false;
  public navItems = [];

  toggleMinimize(e: any) {
    this.sidebarMinimized = e;
  }

}

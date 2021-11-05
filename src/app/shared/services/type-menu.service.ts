import { Injectable } from '@angular/core';
import { INavData } from '@coreui/angular';

@Injectable({
  providedIn: 'root'
})
export class TypeMenuService {

  navItems: INavData[] = [
    {
      name: 'Dashboard',
      url: '/menu/dashboard',
      icon: 'icon-speedometer'
    },
    {
      title: true,
      name: 'Sub Menu'
    },
    {
      name: 'Home',
      url: '/menu/home',
      icon: 'icon-drop'
    }
  ];

  constructor() { }

  getMenu(): INavData[] {
    return this.navItems;
  }
}

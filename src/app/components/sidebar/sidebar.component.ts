import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Principal',  icon:'dashboard', class: '' },
    { path: 'mantenimiento-hoteles', title: 'Mantenimiento Hoteles',  icon: 'business', class: '' },
    { path: 'user-profile', title: 'Relevo',  icon:'swap_horiz', class: '' },
    { path: 'table-list', title: 'Asignación',  icon:'assignment', class: '' },
    { path: 'icons', title: 'Reportes',  icon:'web', class: '' },
   /* { path: 'maps', title: 'Maps',  icon:'location_on', class: '' },
    { path: 'notifications', title: 'Notifications',  icon:'notifications', class: '' },
    { path: 'upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },*/
    { path: 'typography', title: 'Administrar Hotel',  icon:'assignment_ind', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}

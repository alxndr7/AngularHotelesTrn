import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import {MainLayoutComponent} from './components/app-layouts/main-layout.component';
import {HotelesComponent} from './+hoteles/hoteles.component';

const routes: Routes =[
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'mantenimiento-hoteles',      component: HotelesComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    {
        path: 'auth',
        component: MainLayoutComponent,
        children: [
            { path: 'auth', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard',      component: DashboardComponent },
            { path: 'auth', redirectTo: 'user-profile', pathMatch: 'full' },
            { path: 'user-profile',      component: UserProfileComponent },
            { path: 'auth', redirectTo: 'mantenimiento-hoteles', pathMatch: 'full' },
            { path: 'mantenimiento-hoteles',      component: HotelesComponent },
            { path: 'auth', redirectTo: 'icons', pathMatch: 'full' },
            { path: 'icons',      component: IconsComponent },
        ]
    },

    { path: '', pathMatch: 'full', redirectTo: 'login' },
    {
        path: 'login', loadChildren: 'app/+auth/login/login.module#LoginModule',
        pathMatch: 'full'
    },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }

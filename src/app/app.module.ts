import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { SessionStorageService} from 'ngx-webstorage';
import { AuthenticationService} from './common/services/authentication.service';
import { HttpService} from './common/services/http.service';
import { DashboardService} from './common/services/dashboard.service';
import { HotelesComponent } from './+hoteles/hoteles.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalNuevoHotelComponent } from './Modals/modal-nuevo-hotel/modal-nuevo-hotel.component';
import { ModalEditarHotelComponent } from './Modals/modal-editar-hotel/modal-editar-hotel.component';
import {HotelesService} from './common/services/hoteles.service';

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        UserProfileComponent,
        TableListComponent,
        TypographyComponent,
        IconsComponent,
        MapsComponent,
        NotificationsComponent,
        UpgradeComponent,
        HotelesComponent,
        ModalNuevoHotelComponent,
        ModalEditarHotelComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ComponentsModule,
        RouterModule,
        AppRoutingModule,
        NgbModule.forRoot(),
    ],
    providers: [
        HttpService,
        AuthenticationService,
        SessionStorageService,
        DashboardService,
        HotelesService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

import {Component, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import { DashboardService } from '../common/services/dashboard.service';
import { MHotel } from '../common/models/mHotel.model';
import {FormGroup} from '@angular/forms';


@Component({
    selector: 'app-+hoteles',
    templateUrl: './hoteles.component.html',
    styleUrls: ['./hoteles.component.scss']
})
export class HotelesComponent implements OnInit {
    @ViewChild('myModal') myModal;
    @Input('show-modal') showModal: boolean;
    hoteles: MHotel[];
    hotelesItems: any[];
    closeResult: string;
    valor_item: string;
    display='none';
    type: FormGroup;

    constructor(public _dashboardService: DashboardService) { }

    ngOnInit() {
        this._dashboardService.getHoteles().subscribe(
            (data) => {
                this.hoteles = data;
                console.log(this.hoteles);
                this.hotelesItems = this.hoteles.filter(hotelItem => hotelItem);
            },
            err => {
                console.error(err);
            }
        );
    }


    ver_distribucion(id_hotel) {
        console.log('ver: ' + id_hotel);
    }
    editar_hotel(id_hotel) {
        console.log('editar: ' + id_hotel);
    }
    eliminar_hotel(id_hotel) {
        console.log('eliminar: ' + id_hotel);
    }

    openModel(id) {

        setTimeout(() => {
            this.display = 'block';
            this.valor_item = id;
        }, 10);
    }
    onCloseHandled(){
        this.display = 'none';
    }

}

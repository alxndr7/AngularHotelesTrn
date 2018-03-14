import {Component, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import { DashboardService } from '../common/services/dashboard.service';
import { MHotel } from '../common/models/mHotel.model';
import {FormGroup} from '@angular/forms';
import {HotelesService} from '../common/services/hoteles.service';


@Component({
    selector: 'app-+hoteles',
    templateUrl: './hoteles.component.html',
    styleUrls: ['./hoteles.component.scss']
})
export class HotelesComponent implements OnInit {
    @ViewChild('myModal') myModal;
    @Input('show-modal') showModal: boolean;
    hotel: MHotel;
    hotelItem : any[];
    hoteles: MHotel[];
    hotelesItems: any[];
    closeResult: string;
    valor_item: string;
    display='none';
    type: FormGroup;

    constructor(public _dashboardService: DashboardService, public _hotelesService: HotelesService) {
        this.hotel = new MHotel(1,"prueba",23,"azul");
    }

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
    eliminar_hotel(id_hotel) {
        console.log('eliminar: ' + id_hotel);
    }

    openModel(id) {

        setTimeout(() => {
            this.display = 'block';
            this.valor_item = id;
        }, 10);
    }
    editarHotel(id_hotel) {
        this._hotelesService.getHotelPorId(id_hotel).subscribe(
            (data) => {
                console.log(data);
                this.display = 'block';
                this.hotel = data;
                this.valor_item = 'hola';
                console.log("data: " +  JSON.stringify(this.hotel));
                console.log("editarhotel: " +   this.hotel[0]);
            },
            err => {
                console.error(err);
            }
        );
    }

    onCloseHandled(){
        this.display = 'none';
    }

}

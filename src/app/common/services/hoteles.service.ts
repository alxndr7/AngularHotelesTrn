import { Injectable } from '@angular/core';
import {Config} from '../config';
import {HttpService} from './http.service';
import {SessionStorageService} from 'ngx-webstorage';

@Injectable()
export class HotelesService {

    apiBaseURL: string = Config.API_SERVER_URL;

    constructor(public _http: HttpService, public _locker: SessionStorageService) {
    }

    public getHotelPorId(id_hotel) {
        const url = `${this.apiBaseURL}/Hoteles-Rest-API/hotelesPorId`;
        return this._http.get2(url, {
            'id': id_hotel
        });
    }

}

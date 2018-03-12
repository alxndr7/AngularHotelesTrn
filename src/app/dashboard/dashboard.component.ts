import {
    AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy,
    OnInit
} from '@angular/core';
import * as Chartist from 'chartist';
import {AuthenticationService} from '../common/services/authentication.service';
import {DashboardService} from '../common/services/dashboard.service';

declare interface HotelesInfo {
    hotelId: number;
    hotelNombre: string;
    hotelNumHab: number;
}

export const HOTELES2: HotelesInfo[] = [
    { hotelId: 1, hotelNombre: 'Hotel Plaza',  hotelNumHab: 100 },
    { hotelId: 2, hotelNombre: 'Hotel Dumbao',  hotelNumHab: 50},
    { hotelId: 3, hotelNombre: 'Hotel Yaureñita',  hotelNumHab: 70},
    { hotelId: 4, hotelNombre: 'Hotel Apolo',  hotelNumHab: 70},
];


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {
    hoteles: any[];
    hotelesItems: any[];
    constructor(public _dashboardService: DashboardService) {
        console.log('constructor');
        setTimeout(() => {    //<<<---    using ()=> syntax
            this.hotelesItems = HOTELES2.filter(hotelItem => hotelItem);
            this.function_hoteles();
        }, 3000);
    }
    startAnimationForLineChart(chart){
        let seq: any, delays: any, durations: any;
        seq = 0;
        delays = 80;
        durations = 500;

        chart.on('draw', function(data) {
            if(data.type === 'line' || data.type === 'area') {
                data.element.animate({
                    d: {
                        begin: 600,
                        dur: 700,
                        from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                        to: data.path.clone().stringify(),
                        easing: Chartist.Svg.Easing.easeOutQuint
                    }
                });
            } else if(data.type === 'point') {
                seq++;
                data.element.animate({
                    opacity: {
                        begin: seq * delays,
                        dur: durations,
                        from: 0,
                        to: 1,
                        easing: 'ease'
                    }
                });
            }
        });

        seq = 0;
    };

    ngOnInit() {

      /*  this._dashboardService.getHoteles().subscribe(
            function(data) {
                console.log("NEXT");
                this.hoteles = data;
                this.hotelesItems = this.hoteles.filter(hotelItem => hotelItem);
            },
            function(error) {   console.error(error);},
            function() { console.log("the subscription is completed")}
        );*/
     /*   this._dashboardService.getHoteles().subscribe(
            (data) => {
                this.hoteles = data;
                this.hotelesItems = this.hoteles.filter(hotelItem => hotelItem);
            },
            err => {
                console.error(err);
            }
        );*/
        /*  this.hotelesItems = this.hoteles.filter(hotelItem => hotelItem);*/
        /* ----------==========     Daily Sales Chart initialization For Documentation    ==========---------- */
    }
    ngAfterViewInit() {
        console.log("despues de init");
    }
    function_hoteles() {
        const dataDailySalesChart: any = {
            labels: ['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa', 'Do'],
            series: [
                [12, 17, 7, 17, 23, 18, 38]
            ]
        };

        const optionsDailySalesChart: any = {
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0
            }),
            low: 0,
            high: 100, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
            chartPadding: { top: 0, right: 0, bottom: 0, left: 0},
        };

        var dailySalesChart = new Chartist.Line('#dailySalesChart1', dataDailySalesChart, optionsDailySalesChart);
        var dailySalesChart2 = new Chartist.Line('#dailySalesChart2', dataDailySalesChart, optionsDailySalesChart);
        var dailySalesChart3 = new Chartist.Line('#dailySalesChart3', dataDailySalesChart, optionsDailySalesChart);
        var dailySalesChart4 = new Chartist.Line('#dailySalesChart4', dataDailySalesChart, optionsDailySalesChart);

        this.startAnimationForLineChart(dailySalesChart);
        this.startAnimationForLineChart(dailySalesChart2);
        this.startAnimationForLineChart(dailySalesChart3);
        this.startAnimationForLineChart(dailySalesChart4);
    }

}

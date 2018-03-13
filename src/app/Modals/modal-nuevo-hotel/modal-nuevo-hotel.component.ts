import {Component, Input} from '@angular/core';

/*
@Component({
    selector: 'ngbd-modal-content',
    template: `
    <div class="modal-header" ng-style="{'z-index': 99000}">
      <h4 class="modal-title">Hi there!</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>Hello, {{name}}!</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class NgbdModalContent {
    @Input() name;

    constructor(public activeModal: NgbActiveModal) {}
}
*/

@Component({
    selector: 'app-modal-nuevo-hotel',
    templateUrl: './modal-nuevo-hotel.component.html',
    styleUrls: ['./modal-nuevo-hotel.component.scss']
})
export class ModalNuevoHotelComponent {

    id_item: number;
    constructor(/*private modalService: NgbModal*/) {
        this.id_item = 15;
    }

    validar_nuevo_hotel(i) {
        console.log(i);
    }
   /* open() {
        const modalRef = this.modalService.open(NgbdModalContent);
        modalRef.componentInstance.name = 'World';
    }*/
}

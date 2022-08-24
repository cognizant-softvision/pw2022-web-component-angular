import { Component, ElementRef, ViewChild } from '@angular/core';
import '../webcomponents/modal';
interface IPrwModal {
  get open(): boolean;
  showModal(): void;
  hideModal(): void;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('modal') modal!: ElementRef<IPrwModal>;
  

  showModal(): void {
    this.modal.nativeElement.showModal();
  }

  closeModal(): void {
    this.modal.nativeElement.hideModal();
  }
}

import { Component, EventEmitter, HostListener, Output } from '@angular/core';

@Component({
  selector: 'app-btn-base',
  template: ''
})
export class BtnBaseComponent {

  @Output() OnClick: EventEmitter<any> = new EventEmitter<any>();

  @HostListener('click', ['$event.target'])
  onClick(btn: any) {
    console.log('button', btn);
  }
}

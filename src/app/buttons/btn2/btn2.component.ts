import { BtnBaseComponent } from './../btn-base/btn-base.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn2',
  templateUrl: './btn2.component.html',
  styleUrls: ['./btn2.component.scss']
})
export class Btn2Component extends BtnBaseComponent {

  constructor() { 
    super();
  }

}

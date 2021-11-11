import { Component } from '@angular/core';
import { BtnBaseComponent } from '../btn-base/btn-base.component';

@Component({
  selector: 'app-btn3',
  templateUrl: './btn3.component.html',
  styleUrls: ['./btn3.component.scss']
})
export class Btn3Component extends BtnBaseComponent {

  constructor() { 
    super();
  }

}

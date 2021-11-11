import { Component } from '@angular/core';
import { BtnBaseComponent } from '../btn-base/btn-base.component';

@Component({
  selector: 'app-btn1',
  templateUrl: './btn1.component.html',
  styleUrls: ['./btn1.component.scss']
})
export class Btn1Component extends BtnBaseComponent {

  constructor() { 
    super();
  }

}


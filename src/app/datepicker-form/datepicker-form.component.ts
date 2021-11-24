import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-datepicker-form',
  templateUrl: './datepicker-form.component.html',
  styleUrls: ['./datepicker-form.component.scss']
})
export class DatepickerFormComponent implements OnInit {

  isActive: boolean = false;

  @HostListener('click') onClick(event: Event) {
    this.isActive = !this.isActive;
  }

  control = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

}

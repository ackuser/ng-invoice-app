import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-datepicker-form',
  templateUrl: './datepicker-form.component.html',
  styleUrls: ['./datepicker-form.component.scss']
})
export class DatepickerFormComponent implements OnInit {

  isActive: boolean = false;

  daysMap = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  monthMap = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


  @HostListener('click') onClick(event: Event) {
    this.isActive = !this.isActive;
  }

  control = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

  setMonth(arg: number) { }
}

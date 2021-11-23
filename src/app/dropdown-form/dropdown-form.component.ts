import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dropdown-form',
  templateUrl: './dropdown-form.component.html',
  styleUrls: ['./dropdown-form.component.scss']
})
export class DropdownFormComponent implements OnInit {

  data = [1, 7, 14, 30];

  isActive: boolean = false;

  @HostListener('click') onClick(event: Event) {
    this.isActive = !this.isActive;
  }

  control = new FormControl('');

  constructor() { }

  ngOnInit(): void {
    this.setValue(this.data[this.data.length - 1])
  }

  setValue(arg0: number) {
    this.control.setValue(`Net ${arg0} Day${arg0 > 1 ? "s" : ""}`)
  }


}

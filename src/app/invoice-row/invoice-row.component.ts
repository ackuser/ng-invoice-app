import { Component, Input, OnInit } from '@angular/core';
import { Invoice, Status } from '../invoice';

@Component({
  selector: 'app-invoice-row',
  templateUrl: './invoice-row.component.html',
  styleUrls: ['./invoice-row.component.scss'],
})
export class InvoiceRowComponent implements OnInit {

  @Input() invoice!: Invoice;

  status = Status;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { Invoice } from '../invoice';
import { InvoiceStatus } from '../invoice-status';

@Component({
  selector: 'app-invoice-row',
  templateUrl: './invoice-row.component.html',
  styleUrls: ['./invoice-row.component.scss']
})
export class InvoiceRowComponent implements OnInit {

  @Input() invoice!: Invoice;

  InvoiceStatus = InvoiceStatus;

  constructor() { }

  ngOnInit(): void {
  }

}

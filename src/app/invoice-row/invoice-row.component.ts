import { Component, OnInit } from '@angular/core';
import { InvoiceStatus } from '../invoice-status';

@Component({
  selector: 'app-invoice-row',
  templateUrl: './invoice-row.component.html',
  styleUrls: ['./invoice-row.component.scss']
})
export class InvoiceRowComponent implements OnInit {

  InvoiceStatus = InvoiceStatus;

  constructor() { }

  ngOnInit(): void {
  }

}

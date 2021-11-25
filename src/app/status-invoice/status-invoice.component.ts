import { InvoiceStatus } from './../invoice-status';
import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-status-invoice',
  templateUrl: './status-invoice.component.html',
  styleUrls: ['./status-invoice.component.scss']
})
export class StatusInvoiceComponent implements OnInit {

  @Input() status!: InvoiceStatus;

  @HostBinding('class') className: any;

  constructor() { }

  ngOnInit(): void {
    this.className = this.status?.toString().toLowerCase()
  }

}

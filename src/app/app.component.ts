import { Component } from '@angular/core';
import { Invoice } from './invoice';
import { InvoiceStatus } from './invoice-status';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'invoiceApp';

  invoice1: Invoice = {
    code: 'RT3080',
    date: 'Due 19 Aug 2021',
    name: 'Jensen Huang',
    amount: 1800.90,
    status: InvoiceStatus.PAID
  }

  invoice2: Invoice = {
    code: 'XM9141',
    date: 'Due 20 Sep 2021',
    name: 'Alex Grim',
    amount: 556,
    status: InvoiceStatus.PENDING
  }

  invoice3: Invoice = {
    code: 'FV2353',
    date: 'Due 12 Nov 2021',
    name: 'Anita Wainwright',
    amount: 3102.04,
    status: InvoiceStatus.DRAFT
  }
}

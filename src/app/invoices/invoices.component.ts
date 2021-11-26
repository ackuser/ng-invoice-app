import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { Invoice } from '../invoice';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss']
})
export class InvoicesComponent implements OnInit {

  invoices$!: Observable<Invoice[]>;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.invoices$ = this.dataService.getData();
  }

}

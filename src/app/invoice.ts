import { InvoiceStatus } from './invoice-status';

export interface Invoice {
    code: string;
    date: string;
    name: string;
    amount: number;
    status: InvoiceStatus;
}

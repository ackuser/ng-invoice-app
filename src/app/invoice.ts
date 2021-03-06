export interface Address {
    street: string,
    city: string,
    postCode: string,
    country: string
}

export interface Item {
    name: string,
    quantity: number,
    price: number,
    total: number
}

export enum Status {
    PAID = 'Paid',
    PENDING = 'Pending',
    DRAFT = 'Draft',
}

export interface Invoice {
    id: string,
    createdAt: string,
    paymentDue: string,
    description: string,
    paymentTerms: number,
    clientName: string,
    clientEmail: string,
    status: Status,
    senderAddress: Address,
    clientAddress: Address,
    items: Item[],
    total: number
}

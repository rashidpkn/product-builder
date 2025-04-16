export interface CreateInvoiceProps {
    access_token :string;
    firstName : string;
    lastName:string;
    email:string;
    transactionType:"AUTH" | "SALE" | "PURCHASE";
    emailSubject:string;
    invoiceExpiryDate?:string ; //2019-07-28
    paymentAttempts?:number;
    redirectUrl?:string;
    items:Item[]
    total:Total;
    message:string;
    skipInvoiceCreatedEmailNotification:boolean
}

export interface CreateInvoiceType {
    _links:            Links;
    emailSubject:      string;
    invoiceExpiryDate:string;
    locale:            string;
    reference:         string;
    outletRef:         string;
    orderReference:    string;
    firstName:         string;
    lastName:          string;
    email:             string;
    transactionType:   string;
    items:             Item[];
    total:             Total;
    message:           string;
}

interface Item {
    description:string;
    totalPrice:Total;
    quantity:number;
}

interface Total {
    currencyCode:string;
    value:number;
}



interface Links {
    self:         EmailData;
    payment:      EmailData;
    "email-data": EmailData;
    resend:       EmailData;
}

interface EmailData {
    href: string;
}

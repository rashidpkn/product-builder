

export interface CreateOrderProps{
    access_token :string;
    action:"AUTH" | "SALE" | "PURCHASE";
    amount:{
        currencyCode:string;
        value:number;
    };
    emailAddress:string;

}

export interface CreateOrderType {
    _id:                   string;
    _links:                CreateOrderTypeLinks;
    action:                string;
    amount:                Amount;
    language:              string;
    merchantAttributes:    MerchantAttributes;
    emailAddress:          string;
    reference:             string;
    outletId:              string;
    createDateTime:        string;
    paymentMethods:        PaymentMethods;
    referrer:              string;
    formattedAmount:       string;
    formattedOrderSummary: FormattedOrderSummary;
    _embedded:             Embedded;
}

interface Embedded {
    payment: Payment[];
}

interface Payment {
    _id:            string;
    _links:         PaymentLinks;
    state:          string;
    amount:         Amount;
    updateDateTime: string;
    outletId:       string;
    orderReference: string;
}

interface PaymentLinks {
    "payment:apple_pay":   CnpPaymentLink;
    self:                  CnpPaymentLink;
    "payment:card":        CnpPaymentLink;
    "payment:samsung_pay": CnpPaymentLink;
    "payment:saved-card":  CnpPaymentLink;
    curies:                Cury[];
}

interface Cury {
    name:      string;
    href:      string;
    templated: boolean;
}

interface CnpPaymentLink {
    href: string;
}

interface Amount {
    currencyCode: string;
    value:        number;
}

interface CreateOrderTypeLinks {
    "cnp:payment-link":      CnpPaymentLink;
    "payment-authorization": CnpPaymentLink;
    self:                    CnpPaymentLink;
    "tenant-brand":          CnpPaymentLink;
    payment:                 CnpPaymentLink;
    "merchant-brand":        CnpPaymentLink;
}

interface FormattedOrderSummary {
}

interface MerchantAttributes {
    redirectUrl: string;
}

interface PaymentMethods {
    card:   string[];
    wallet: string[];
}

import axios from 'axios'




import { CreateInvoiceProps, CreateInvoiceType } from "./types/CreateInvoice"
import { CreateOrderProps, CreateOrderType } from "./types/CreateOrder"
import { GenerateAccessTokenType } from "./types/GenerateAccessToken"

const api_key = "MDYwOTMxNDUtOTNmNS00YzRmLTg2M2UtOTM4NTA1NGM4Nzg2OjFiYWRhMTQyLTVjYzQtNDE2NC04MTRkLTZjY2EyNTczMmQ5Yg=="
// const reference = "22053651-a1d5-43c5-8b1b-12e4a07dc942"
// const reference = "e00769b5-8c84-4f78-8e43-8ebf0d44c288"
const reference = "8492420e-244a-4e27-ab91-be1893743ff2"

const api = axios.create({
    baseURL:"https://api-gateway.ngenius-payments.com",
})


const generateAccessToken = async ():Promise<GenerateAccessTokenType>=>{
    try {
        
        const {data} = await api.post('/identity/auth/access-token',{},{
            headers:{
                "Content-Type":"application/vnd.ni-identity.v1+json",
                "Authorization":`Basic ${api_key}`,
                "Accept":"application/vnd.ni-identity.v1+json"
            }
        })

        return data
    } catch (error) {
        console.log(error.response.data);
    }

}

const createOrder = async ({action,amount,emailAddress,access_token}:CreateOrderProps):Promise<CreateOrderType>=>{

    try {
            const {data} = await api.post(`/transactions/outlets/${reference}/orders`,{
                action,
                amount,
                emailAddress
            },{
                headers:{
                    Authorization:`Bearer ${access_token}`,
                    "Content-Type":"application/vnd.ni-payment.v2+json",
                    "Accept":"application/vnd.ni-payment.v2+json"
                }
            })

            return data
    } catch (error) {
        console.log(error.response.data);        
    }


}


const createInvoice = async (props:CreateInvoiceProps):Promise<CreateInvoiceType>=>{


    try {
    const {data} = await api.post(`/invoices/outlets/${reference}/invoice`,{
        firstName:props.firstName,
        lastName:props.lastName,
        email:props.email,
        transactionType:props.transactionType,
        emailSubject:props.emailSubject,
        invoiceExpiryDate:props.invoiceExpiryDate,
        paymentAttempts:props.paymentAttempts,
        redirectUrl:props.redirectUrl,
        items:props.items,
        total:props.total,
        message:props.message,
        skipInvoiceCreatedEmailNotification:props.skipInvoiceCreatedEmailNotification
    },{
        headers:{
            "Authorization":`Bearer ${props.access_token}`,
            "Content-Type":"application/vnd.ni-invoice.v1+json"
        }
    })        

    return data
} catch (error) {
        console.log(error.response.data);
    }


}


export  {generateAccessToken,createOrder,createInvoice}
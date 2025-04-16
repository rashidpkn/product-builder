import { customerType, fabricType } from "src/order/types";
import { sendMail } from "..";

const orderPending = (customer:customerType,fabric:fabricType)=>{
    
    const html = `
      <div class="mail-temp" style="max-width: 650px; width: 100%; margin: auto; font-family: sans-serif;">
    <table style="width: 100%; border-collapse: collapse;">
        <tr>
            <td class="logo" style="background: #e1999f; padding: 10px;">
                <p style="text-align: center;">
                    <img src="https://my-thread.com/mail/logo.png" width="100" alt="">
                </p>
            </td>
        </tr>
        <tr>
            <td>
                <img class="hero" src="https://my-thread.com/mail/banner.jpg" alt="" style="max-width: 650px; object-fit: cover; margin: auto;">
            </td>
        </tr>
        <tr>
            <td>
                <h2 style="text-align: center; font-size: 25px; font-weight: 700; color: #e1999f;">Your Order  Pending</h2>
                <p style="font-size: 14px; text-align: center;">Thank you for choosing My-Thread.com! We noticed that your order is still pending and not yet completed. We’re excited to help you bring beautiful curtains to your space, and just one more step is needed to get things moving. Once your payment is confirmed, we’ll begin processing your order and aim to deliver within the next 10 days. If you have any questions or need help finalizing your purchase, our customer support team is here for you. We can’t wait to serve you!</p>
            </td>
        </tr>
        <tr>
            <td class="contact" style="padding: 0 40px;">
                <h2 style="text-align: center;">Customer Details</h2>
                <table style="max-width: 450px; margin: auto;">
                    <tr>
                        <td>Name</td>
                        <td style="text-align: right;">${customer.fName} ${customer.lName}</td>
                    </tr>
                    <tr>
                        <td>Country</td>
                        <td style="text-align: right;">${customer.country}</td>
                    </tr>
                    <tr>
                        <td>Emirate / Province</td>
                        <td style="text-align: right;">${customer.emirate}</td>
                    </tr>
                    <tr>
                        <td>Type</td>
                        <td style="text-align: right;">${customer.type}</td>
                    </tr>
                    <tr>
                        <td>Street Address</td>
                        <td style="text-align: right;">${customer.streetAddress}</td>
                    </tr>
                    <tr>
                        <td>Apartment, suit, unit, etc</td>
                        <td style="text-align: right;">${customer.apartment}</td>
                    </tr>
                    <tr>
                        <td>Phone</td>
                        <td style="text-align: right;">${customer.phone}</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td style="text-align: right;">${customer.email}</td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td class="contact" style="padding: 0 40px;">
                <h2 style="text-align: center;">Fabric</h2>
                <table style="max-width: 450px; margin: auto;">
                    <tr>
                        <td>Fabric</td>
                        <td style="text-align: right;">${fabric.type}</td>
                    </tr>
                    <tr>
                        <td>Item</td>
                        <td style="text-align: right;">${fabric.coverType}</td>
                    </tr>
                    <tr>
                        <td>Installation</td>
                        <td style="text-align: right;">${fabric.windowType}</td>
                    </tr>
                    <tr>
                        <td>Live in Dubai</td>
                        <td style="text-align: right;">${fabric.liveInDubai ? 'Yes' : 'No'}</td>
                    </tr>
                    <tr>
                        <td>Measurements (H x W)</td>
                        <td style="text-align: right;">${fabric.height} cm x ${fabric.width} cm</td>
                    </tr>
                    <tr>
                        <td>Room Name</td>
                        <td style="text-align: right;">${fabric.roomName}</td>
                    </tr>
                    <tr>
                        <td>Panel type</td>
                        <td style="text-align: right;">${fabric.panelType}</td>
                    </tr>
                    <tr>
                        <td>Hanging style</td>
                        <td style="text-align: right;">${fabric.hangingStyle}</td>
                    </tr>
                    <tr>
                        <td>Lining</td>
                        <td style="text-align: right;">${fabric.lining}</td>
                    </tr>
                    <tr>
                        <td>Track or Pole</td>
                        <td style="text-align: right;">${fabric.installationMethod === 'none' ? 'No' : 'Yes'} (${fabric.installationMethod})</td>
                    </tr>
                    <tr>
                        <td>Installation Item</td>
                        <td style="text-align: right;">${fabric.installationItem.name} (${fabric.installationItem.meterial})</td>
                    </tr>
                    <tr>
                        <td>Making Price</td>
                        <td style="text-align: right;">AED ${fabric.price.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>Boxed & Postage</td>
                        <td style="text-align: right;">AED 50.00</td>
                    </tr>
                    <tr>
                        <td>Total Price</td>
                        <td style="text-align: right;">AED ${(fabric.price + 50).toFixed(2)}</td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr class="footer" style="background-color: #e1999f; text-align: center; padding: 30px 0px; color: white; margin-top: 20px;">
            <td>
                <p>&copy; 2025 Thread Blinds & Curtains. All Rights Reserved.</p>
            </td>
        </tr>
    </table>
</div>

    `

    try {
        sendMail(customer.email,"Your Order Pending",html)
        sendMail('info@my-thread.com',"Order Pending",html)
    } catch (error) {
        console.log("Error")
    }


}

export {orderPending}
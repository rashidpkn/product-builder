import * as nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: 'smtppro.zoho.com',
  auth: {
      user: 'info@my-thread.com',
      pass: 'e8aZkrdLZQrk'
  }
  });
  
  
  export const sendMail = async (to:string,subject:string,html:string)=>{
    try {
      
      const mailOptions = {
        from: {
          name: 'My Thread',
          address: 'info@my-thread.com'
        },
        to, subject, html,
      };

      const {response} = await transporter.sendMail(mailOptions)
      console.log('The email has  sent.');
      return response
    } catch (error) {
      console.log();
      console.log('The email has not been sent to.' + to);
    }

      
  }
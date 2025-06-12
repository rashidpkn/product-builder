import * as nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.zeptomail.com',
  port: 587,
  auth: {
    user: 'emailapikey',
    pass: 'wSsVR613/BGmWKd/lTD8IrhqnFhXDgzxHEV/2Aby63L0Gv3H9Mc6lBefBgSlHfJJF29rFTMS9b4unxpRhGcJiostzA4IXCiF9mqRe1U4J3x17qnvhDzIXGVbkReLK4oNzgxqk2dpE80g+g==',
  },
});

export const sendMail = async (to: string, subject: string, html: string) => {
  try {
    const mailOptions = {
      from: {
        name: 'Thread Blinds & Curtains',
        address: 'info@my-thread.com',
      },
      to,
      subject,
      html,
    };

    const { response } = await transporter.sendMail(mailOptions);
    console.log('The email has  sent to :', to);
    return response;
  } catch (error) {
    console.log('The email has not been sent to :', to);
  }
};

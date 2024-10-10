const SibApiV3Sdk = require('sib-api-v3-sdk');
require('dotenv').config();

const sendContactEmail = async (formData: any) => {
  let defaultClient = SibApiV3Sdk.ApiClient.instance;

  // Configure API key authorization
  let apiKey = defaultClient.authentications['api-key'];
  apiKey.apiKey = process.env.BREVO_API_KEY;

  const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

  let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
  sendSmtpEmail.to = [{ email: 'miriamciurea777@icloud.com' }];
  sendSmtpEmail.sender = { email: 'miriamciurea@gmail.com', name: 'MoonCode' };
  sendSmtpEmail.subject = `New Contact Form Submission from ${formData.name}`;
  sendSmtpEmail.textContent = `
    You have received a new contact form submission.
    Name: ${formData.name}
    Email: ${formData.email}
    Phone: ${formData.phone}
    Budget: ${formData.budget}
    More Information: ${formData.moreInfo}
  `;

  try {
    await apiInstance.sendTransacEmail(sendSmtpEmail);
    console.log('Email sent successfully via Brevo');
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

export default sendContactEmail;

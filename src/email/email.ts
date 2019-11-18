import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

let transporterInstance: Mail;

function createTransport() {
  if (!transporterInstance) {
    transporterInstance = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });
  }
  return transporterInstance;
}

export function sendEmail() {
  const transporter = createTransport();

  return transporter.sendMail({
    from: `Buscador Preços <${process.env.EMAIL_USER}>`,
    to: 'filipebkc2209@gmail.com',
    subject: 'Buscador de Preços',
    text: 'Teste',
    html: '<b>Teste</b>'
  });
}
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import { CmdLineParams } from '../config';

let transporterInstance: Mail;

function formatEmailRecepients(argv: CmdLineParams) {
  return (argv.to as string[]).reduce(
    (accumulator, recipient) => `${accumulator},${recipient}`
  );
}

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

export function sendEmail(argv: CmdLineParams, htmlContent: string) {
  const transporter = createTransport();

  return transporter.sendMail({
    from: `Buscador Preços <${process.env.EMAIL_USER}>`,
    to: formatEmailRecepients(argv),
    subject: argv.subject,
    html: htmlContent
  });
}
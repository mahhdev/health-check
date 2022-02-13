import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer'

@Injectable()
export class Emails {

    async sendEmail(api: string) {
        const transporter = nodemailer.createTransport({
            service: process.env.SERVICE,
            auth: {
              user: process.env.FROM_EMAIL,
              pass: process.env.EMAIL_PASS,
            },
          });
          
         await transporter.sendMail({
            from: `"API Health-Check" <${process.env.FROM_EMAIL}>`,
            to: process.env.TO_EMAIL,
            subject: "New Log Error",
            text: `API ${api} falhou! Por favor realizar verificação.`,
            html: `<b>API ${api} falhou! Por favor realizar verificação.</b>`,
          }).then(info => {
            console.log('Email enviado com sucesso');
          }).catch(error => console.log(error))
    }
    
}
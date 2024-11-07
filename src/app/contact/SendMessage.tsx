'use server'
import nodemailer from 'nodemailer';

const email = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "hila.raisfeld@gmail.com",
        pass: "drzb umlg mdlw dkzo"
    }
})

export default async function SendMessage(name: string, mail: string, content: string){
    return (await email.sendMail({
        from: "hila.raisfeld@gmail.com",
        to: "hila.raisfeld@gmail.com",
        subject: "צרו קשר",
        text: `שם: ${name}\nמייל: ${mail}\nתוכן ההודעה: ${content}`
    })).response
}
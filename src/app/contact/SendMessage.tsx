import nodemailer from 'nodemailer';

const email = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "",
        pass: "drzb umlg mdlw dkzo"
    }
})

export default function SendMessage(name: string, mail: string, content: string){
    email.sendMail({
        from: "hilaraisfeld@gmail.com",
        to: "hilaraisfeld@gmail.com",
        subject: "צרו קשר",
        text: `שם: ${name}\nמייל: ${mail}\nתוכן ההודעה: ${content}`
    })
}
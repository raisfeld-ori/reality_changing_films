import nodemailer from 'nodemailer';

const email = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "",
        pass: "drzb umlg mdlw dkzo"
    }
})

export default function SendMessage(name: string, mail: string, content: string){
    
}
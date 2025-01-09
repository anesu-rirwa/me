import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"
import Mailgun from "mailgun.js";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}


export function sendEmail(formData) {
  const mailgun = new Mailgun({
    username: "api",
    key: process.env.MAILGUN_API_KEY,
  });
  
  /*const mg = new Mailgun({
    username: "api",
    key: process.env.MAILGUN_API_KEY,
  });*/

  

}
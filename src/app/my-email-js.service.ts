import { Injectable } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Injectable({
  providedIn: 'root'
})
export class MyEmailJsService {
  private serviceID: string = 'service_brtdka7'; // Replace with your actual Service ID
  private templateID: string = 'template_op4e30x'; // Replace with your actual Template ID
  private userID: string = 'iFnp6ffwzqThzwe5H'; // Replace with your actual User ID

  constructor() { }

  sendEmail(userName:string,
    action:string,
    fromEmail:string,
    mobile:string,
    message:string,
  ): Promise<EmailJSResponseStatus> {
    const templateParams = {
      user_name: userName,
      action: action,
      from_email: fromEmail,
      mobile: mobile,
      message: message
    };
    return emailjs.send(this.serviceID, this.templateID, templateParams, this.userID);
  }
}

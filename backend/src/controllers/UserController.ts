import { Request, Response } from 'express';
import EmailService from '../services/EmailService';

const users = [
  { name: 'Newton Duarte', email: 'newton_@hotmail.com' }
];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },
  async create(req: Request, res: Response) {
    const newUser = req.body;
    
    const emailService = new EmailService();
    
    emailService.sendMail({
      to: {
        name: newUser.name,
        email: newUser.email
      },
      message: {
        subject: 'Bem-vindo ao sistema',
        body: 'Seja muito bem-vindo'
      }
    });

    return res.json(newUser);
  }
}
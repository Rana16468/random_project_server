import express from 'express'
import validateRequest from '../../middleware/validateRequest';
import { ContactValidation } from './Contact.validation';
import { ContactController } from './Contact.controller';

const router=express.Router();

router.post("/",validateRequest(ContactValidation.createContactValidation),ContactController.Contact);


export const ContactRouter=router;


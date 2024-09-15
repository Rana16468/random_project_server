import express from 'express'
import validateRequest from '../../middleware/validateRequest';
import { ProfileValidation } from './Profile.validation';
import { ProfileController } from './Profile.controller';

const router=express.Router();

// handel all over the Request

router.post("/",validateRequest(ProfileValidation.createProfileValidation),ProfileController.createProfile);


export const ProfileRouter=router;
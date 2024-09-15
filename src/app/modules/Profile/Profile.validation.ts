import {z} from 'zod';

const createProfileValidation=z.object({
    body:z.object({
        bio: z.string({required_error:"Bio is Required"}).min(15,{message:"Minimun 15 Character Needeed"}).max(100,{message:"Maximun 100 Character Accepted"}),
    })
});


export const ProfileValidation={
    createProfileValidation
}
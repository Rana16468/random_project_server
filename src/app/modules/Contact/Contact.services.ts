import prisma from "../../shared/prisma";



const ContactIntoDb=async(payload:any)=>{

 const result=await prisma.profile.create({
     data:payload 
 });

 console.log(result);


return result;
    
}

export const ContactService={
    ContactIntoDb
}
import httpStatus from "http-status";
import catchAsync from "../../shared/catchAsync";
import sendRespone from "../../shared/sendRespone";
import { ContactService } from "./Contact.services";


const Contact=catchAsync(async(req,res)=>{

   const result=await  ContactService.ContactIntoDb(req.body);
    sendRespone(res,{success:true,status:httpStatus.CREATED,message:"Create successfully Profile",data:result})


});

export const ContactController={
    Contact
}
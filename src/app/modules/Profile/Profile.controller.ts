import httpStatus from "http-status";
import catchAsync from "../../shared/catchAsync";
import sendRespone from "../../shared/sendRespone";
import { ProfileServices } from "./Profile.services";


const createProfile=catchAsync(async(req,res)=>{

    const data=req.body;
    const result=await ProfileServices.createProfileIntoDb(data);
    sendRespone(res,{success:true,status:httpStatus.CREATED,message:"Create successfully Profile",data:result})
});

export const ProfileController={
    createProfile
}
import prisma from "../../shared/prisma";


const createProfileIntoDb=async(payload:any)=>{



    const result=await prisma.profile.create({
        data:payload
    })
    return result;
}
export const ProfileServices={
    createProfileIntoDb
}
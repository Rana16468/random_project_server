import express from  'express';
import { ProfileRouter } from '../modules/Profile/Profile.routes';
import { ContactRouter } from '../modules/Contact/Conatct.routes';




const router=express.Router();

const moduleRoutes=[

    {path:"/profile", route:ProfileRouter},
    {path:"/contact",route: ContactRouter}
    
   

    
]

moduleRoutes.forEach((route)=>router.use(route.path,route.route))

export default router;
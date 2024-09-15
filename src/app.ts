import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import cookieParser  from 'cookie-parser';
import golobalErrorHnadelar from './app/middleware/golobalErrorHnadelar';
import notFounded from './app/middleware/notFounded';
import router from './app/routes';
const app:Application=express();
//{origin:"https://pat-adoption-orpin.vercel.app",credentials:true}

app.use(cors());

app.use(cookieParser());
// parser
app.use(express.json());

app.use(express.urlencoded({extended:true}));
app.get('/',(req:Request,res:Response)=>{

    res.send({message:"Assigment 9 Server is Running"})


});
app.use('/api/v1',router);
app.use(golobalErrorHnadelar);
app.use("*",notFounded);

export default app;
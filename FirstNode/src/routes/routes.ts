
import {Request,Response,Router} from 'express';  

const router= Router();

router.get('/home',(req:Request,res:Response)=>{
    res.send("Inside Home Page");
})

router.get('/login',(req:Request,res:Response)=>{
    res.send("Inside Login Page");
})

router.get('/signin',(req:Request,res:Response)=>{
    res.send("Inside Signin Page");
})

export {
    router
}

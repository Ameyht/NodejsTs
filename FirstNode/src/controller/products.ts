import { Request,Response } from "express";

const HomeDetail=(req: Request, res: Response)=>{
    res.send("Inside Home Page");
}

export {
    HomeDetail
}
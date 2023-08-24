import { Request, Response } from "express";

class IndexControllers{
    public index (req : Request, resp: Response){
        resp.send('Hello Banda!!!');
    }
}
export const IndexController = new IndexControllers();
import { Request, Response, RequestHandler } from 'express';

export default class OrderController {
    getAllOrders: RequestHandler = async(req: Request, res: Response): Promise<Response> => {
        return res;
    };

    purchaseOrder: RequestHandler = async(req: Request, res: Response): Promise<Response> => {
        return res;
    };

    searchOrder: RequestHandler = async(req: Request, res: Response): Promise<Response> => {
        return res;
    };
};
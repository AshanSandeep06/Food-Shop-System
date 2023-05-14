import { Request, Response, RequestHandler } from 'express';

const OrderController = () => {
    const getAllOrder: RequestHandler = async(req: Request, res: Response): Promise<Response> => {
        return res;
    };

    const purchaseOrder: RequestHandler = async(req: Request, res: Response): Promise<Response> => {
        return res;
    };

    const searchOrder: RequestHandler = async(req: Request, res: Response): Promise<Response> => {
        return res;
    };
};

export default OrderController;
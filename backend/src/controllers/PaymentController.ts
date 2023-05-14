import { Request, Response, RequestHandler } from 'express';

export default class PaymentController {
    getAllPayments: RequestHandler = async(req: Request, res: Response): Promise<Response> => {
        return res;
    };

    savePayment: RequestHandler = async(req: Request, res: Response): Promise<Response> => {
        return res;
    };

    updatePayment: RequestHandler = async(req: Request, res: Response): Promise<Response> => {
        return res;
    };

    deletePayment: RequestHandler = async(req: Request, res: Response): Promise<Response> => {
        return res;
    };

    searchPayment: RequestHandler = async(req: Request, res: Response): Promise<Response> => {
        return res;
    };
};
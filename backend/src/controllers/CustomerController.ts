import { Request, Response, RequestHandler } from 'express';

export default class CustomerController {
    getAllCustomers: RequestHandler = async(req: Request, res: Response): Promise<Response> => {
        return res;
    };

    saveCustomer: RequestHandler = async(req: Request, res: Response): Promise<Response> => {
        return res;
    };

    updateCustomer: RequestHandler = async(req: Request, res: Response): Promise<Response> => {
        return res;
    };

    deleteCustomer: RequestHandler = async(req: Request, res: Response): Promise<Response> => {
        return res;
    };

    searchCustomer: RequestHandler = async(req: Request, res: Response): Promise<Response> => {
        return res;
    };
};
import { Request, Response, RequestHandler } from 'express';

const CustomerController = () => {
    const getAllCustomers: RequestHandler = async(req: Request, res: Response): Promise<Response> => {
        return res;
    };

    const saveCustomer: RequestHandler = async(req: Request, res: Response): Promise<Response> => {
        return res;
    };

    const updateCustomer: RequestHandler = async(req: Request, res: Response): Promise<Response> => {
        return res;
    };

    const deleteCustomer: RequestHandler = async(req: Request, res: Response): Promise<Response> => {
        return res;
    };

    const searchCustomer: RequestHandler = async(req: Request, res: Response): Promise<Response> => {
        return res;
    };
};

export default CustomerController;
import { Request, Response, RequestHandler } from 'express';

const ItemController = () => {
    const getAllItems: RequestHandler = async(req: Request, res: Response): Promise<Response> => {
        return res;
    };

    const saveItem: RequestHandler = async(req: Request, res: Response): Promise<Response> => {
        return res;
    };

    const updateItem: RequestHandler = async(req: Request, res: Response): Promise<Response> => {
        return res;
    };

    const deleteItem: RequestHandler = async(req: Request, res: Response): Promise<Response> => {
        return res;
    };

    const searchItem: RequestHandler = async(req: Request, res: Response): Promise<Response> => {
        return res;
    };
};

export default ItemController;
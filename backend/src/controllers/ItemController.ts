import { Request, Response, RequestHandler } from 'express';

export default class ItemController {
    getAllItems: RequestHandler = async(req: Request, res: Response): Promise<Response> => {
        return res;
    };

    saveItem: RequestHandler = async(req: Request, res: Response): Promise<Response> => {
        return res;
    };

    saveItemImages: RequestHandler = async(req: Request, res: Response): Promise<Response> => {
        return res;
    };

    updateItem: RequestHandler = async(req: Request, res: Response): Promise<Response> => {
        return res;
    };

    deleteItem: RequestHandler = async(req: Request, res: Response): Promise<Response> => {
        return res;
    };

    searchItem: RequestHandler = async(req: Request, res: Response): Promise<Response> => {
        return res;
    };
};
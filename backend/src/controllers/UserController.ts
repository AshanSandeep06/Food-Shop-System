import { Request, Response, RequestHandler } from 'express';

export default class UserController {
    saveUser: RequestHandler = async(req: Request, res: Response): Promise<Response> => {
        return res;
    };

    updateUser: RequestHandler = async(req: Request, res: Response): Promise<Response> => {
        return res;
    };

    deleteUser: RequestHandler = async(req: Request, res: Response): Promise<Response> => {
        return res;
    };

    searchUser: RequestHandler = async(req: Request, res: Response): Promise<Response> => {
        return res;
    };
};
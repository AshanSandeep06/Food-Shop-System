import { Request, Response, RequestHandler } from 'express';
import { User } from '../models/User';

export default class UserController {
    getAllUsers: RequestHandler = async(req: Request, res: Response): Promise<Response> => {
        try{
            // Get All Users
            let allUsers = await User.find();
            return res.status(200).json({ message: "Successfully Loaded All Users", response: allUsers });

        }catch(error: unknown) {
            if(error instanceof Error) {
                return res.status(500).json({ message: error.message});
            }else {
                return res.status(500).json({ message: "Unknown Error Occured..!" });
            }
        }
    };

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
import { Request, Response, RequestHandler } from 'express';
import { User } from '../models/User';

export default class UserController {
    searchUserByCustomerID = async(req: Request, res: Response): Promise<Response> => {
        try{
            // search User By CustomerID
            const { customerID } = req.params;
            let user = await User.findOne({ customerID: customerID });
            if(user){
                return res.status(200).json({message: "User has been loaded", response: user});
            }else{
                return res.status(500).json({message: "There is no User exists by this Customer ID - "+customerID });
            }

        }catch(error: unknown){
            if(error instanceof Error){
                return res.status(500).json({message: error.message});
            }else{
                return res.status(500).json({message: "Unknown error Occured..!"});
            }
        }
    }
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
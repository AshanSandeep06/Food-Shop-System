import { Request, Response, RequestHandler } from 'express';
import { Customer } from '../models/Customer';
import mongoose, { ClientSession } from 'mongoose';
import { User } from '../models/User';

export default class CustomerController {
    getAllCustomers: RequestHandler = async(req: Request, res: Response): Promise<Response> => {
        try{
            // Get All Customers
            let allCustomers = await Customer.find();
            return res.status(200).json({ message: "Successfully Loaded All Customers", response: allCustomers });

        }catch(error: unknown) {
            if(error instanceof Error) {
                return res.status(500).json({ message: error.message});
            }else {
                return res.status(500).json({ message: "Unknown Error Occured..!" });
            }
        }
    };

    saveCustomer: RequestHandler = async(req: Request, res: Response): Promise<Response> => {
        let session: ClientSession | null = null;
        
        try {
            const { customerID, customerName, address, contactNumber, email } = req.body;

            session = await mongoose.startSession();
            session.startTransaction();

            let customer = await Customer.findOne({ customerID: customerID });
            if(!customer) {
                customer = new Customer({
                    customerID: customerID,
                    customerName: customerName,
                    address: address,
                    contactNumber: contactNumber,
                    email: email,
                });

                customer = await customer.save();
            }else {
                return res.status(500).json({ message: "This "+customerID+" - Customer is Already Exist, Therefore can't be added" });
            }

            let newUser = new User(req.body);
            newUser = await newUser.save();

            await session.commitTransaction();
            session.endSession();

            return res.status(200).json({ message: "Customer has been Successfully Saved" });

        }catch (error: unknown){
            if(session != null){
                try{
                    await session.abortTransaction();
                }catch(abortError){
                    console.log(`Error aborting transaction: ${abortError}`);
                }
            }

            if(error instanceof Error){
                return res.status(500).json({ message: error.message });
            }else {
                return res.status(500).json({ message: "Unknown Error Occured..!" });
            }
        }
    };

    updateCustomer: RequestHandler = async(req: Request, res: Response): Promise<Response> => {
        let session: ClientSession | null = null;

        try {
            // Update Customer
            const { customerID, customerName, address, contactNumber, email, username, password, role } = req.body;

            session = await mongoose.startSession();
            session.startTransaction();

            let customer = await Customer.findOne({ customerID: customerID });

            if(customer) {
                customer.customerName = customerName,
                customer.address = address,
                customer.contactNumber = contactNumber,
                customer.email = email,

                customer = await customer.save();
                console.log(customer);
            }else {
                return res.status(500).json({ message: "There is no Customer belongs to this "+customerID+" Customer ID" });
            }

            let user = await User.findOne({ username: username });
            if (user){
                user.password = password;
                user.role = role;
                user.customerID = customerID;
                user = await user.save();
            }else {
                return res.status(500).json({ message: "There is no User belongs to this "+username+" - Username" });
            }

            await session.commitTransaction();
            session.endSession();

            return res.status(200).json({ message: "Customer has been Successfully Updated" });

        }catch(error: unknown) {
            if(session != null){
                try{
                    await session.abortTransaction();
                }catch(abortError){
                    console.log(`Error aborting transaction: ${abortError}`);
                }
            }

            if(error instanceof Error) {
                return res.status(500).json({ message: error.message });
            }else {
                return res.status(500).json({ message: "Unknown Error Occured..!" });
            }
        }
    };

    deleteCustomer: RequestHandler = async(req: Request, res: Response): Promise<Response> => {
        let session: ClientSession | null = null;

        try {
            // Delete Customer
            const { customerID } = req.params;

            session = await mongoose.startSession();
            session.startTransaction();

            let deletedCustomer = await Customer.findOneAndDelete({ customerID: customerID });
            if(deletedCustomer){
                console.log("Deleted Customer : "+deletedCustomer);
            }else{
                return res.status(500).json({message: "There is no Customer to be Deleted"});
            }

            let deletedUser = await User.findOneAndDelete({ customerID: customerID });
            if(deletedUser){
                console.log("Deleted User : "+deletedUser);
            }else {
                return res.status(500).json({ message: "There is no User belongs to this "+customerID+" - Customer ID" });
            }

            await session.commitTransaction();
            session.endSession();

            return res.status(200).json({message: "Customer has been Successfully Deleted"});

        }catch(error: unknown) {
            if(session != null){
                try{
                    await session.abortTransaction();
                }catch(abortError){
                    console.log(`Error aborting transaction: ${abortError}`);
                }
            }

            if(error instanceof Error) {
                return res.status(500).json({ message: error.message });
            }else {
                return res.status(500).json({ message: "Unknown Error Occured..!" });
            }
        }
    };

    searchCustomer: RequestHandler = async(req: Request, res: Response): Promise<Response> => {
        try{
            // Search Customer
            const { customerID } = req.params;
            let customer = await Customer.findOne({ customerID: customerID });
            if(customer){
                return res.status(200).json({message: "Customer has been loaded", response: customer});
            }else{
                return res.status(500).json({message: "There is no Customer exists by this Customer ID - "+customerID });
            }

        }catch(error: unknown){
            if(error instanceof Error){
                return res.status(500).json({message: error.message});
            }else{
                return res.status(500).json({message: "Unknown error Occured..!"});
            }
        }
    };
};
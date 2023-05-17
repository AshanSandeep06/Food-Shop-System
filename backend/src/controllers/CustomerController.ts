import { Request, Response, RequestHandler } from 'express';
import { Customer } from '../models/Customer';

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
        try {
            const { customerID, customerName, address, contactNumber, email } = req.body;

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
                return res.status(200).json({ message: "Customer has been Successfully Saved" });
            }else {
                return res.status(500).json({ message: "This "+customerID+" - Customer is Already Exist, Therefore can't be added" });
            }

        }catch (error: unknown){
            if(error instanceof Error){
                return res.status(500).json({ message: error.message });
            }else {
                return res.status(500).json({ message: "Unknown Error Occured..!" });
            }
        }
    };

    updateCustomer: RequestHandler = async(req: Request, res: Response): Promise<Response> => {
        try {
            // Update Customer
            const { customerID, customerName, address, contactNumber, email } = req.body;

            let customer = await Customer.findOne({ customerID: customerID });

            if(customer) {
                customer.customerName = customerName,
                customer.address = address,
                customer.contactNumber = contactNumber,
                customer.email = email,

                customer = await customer.save();
                console.log(customer);
                return res.status(200).json({ message: "Customer has been Successfully Updated" });
            }else {
                return res.status(500).json({ message: "There is no Customer belongs to this "+customerID+" Customer ID" });
            }

        }catch(error: unknown) {
            if(error instanceof Error) {
                return res.status(500).json({ message: error.message });
            }else {
                return res.status(500).json({ message: "Unknown Error Occured..!" });
            }
        }
    };

    deleteCustomer: RequestHandler = async(req: Request, res: Response): Promise<Response> => {
        try{
            // Delete Customer
            const { customerID } = req.params;

            let deletedCustomer = await Customer.findOneAndDelete({ customerID: customerID });
            if(deletedCustomer){
                console.log("Deleted Customer : "+deletedCustomer);
                return res.status(200).json({message: "Customer has been Successfully Deleted"});
            }else{
                return res.status(500).json({message: "There is no Customer to be Deleted"});
            }

        }catch(error: unknown){
            if(error instanceof Error){
                return res.status(500).json({message: error.message});
            }else{
                return res.status(500).json({message: "Unknown error Occured..!"});
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
import { Request, Response, RequestHandler } from 'express';
import { Item } from '../models/Item';

export default class ItemController {
    getAllItems: RequestHandler = async(req: Request, res: Response): Promise<Response> => {
        try{
            // Get All Items
            let allItems = await Item.find();
            return res.status(200).json({ message: "Successfully Loaded All Items", response: allItems });

        }catch(error: unknown) {
            if(error instanceof Error) {
                return res.status(500).json({ message: error.message});
            }else {
                return res.status(500).json({ message: "Unknown Error Occured..!" });
            }
        }
    };

    saveItem: RequestHandler = async(req: Request, res: Response): Promise<Response> => {
        try {
            // Save Item
            // Destructuring assignment
            const { itemCode, itemType, itemName, description, itemImage, unitPrice, qtyOnHand } = req.body;

            // Check the whether relevant item already exists or not
            let item = await Item.findOne({ itemCode: itemCode });
            if(!item) {
                // Save Item only the item code is not existing
                item = new Item({
                    itemCode: itemCode,
                    itemType: itemType,
                    itemName: itemName,
                    description: description,
                    itemImage: itemImage,
                    unitPrice: unitPrice,
                    qtyOnHand: qtyOnHand
                });

                item = await item.save();
                return res.status(200).json({ message: "Item has been Successfully Saved" });
            }else {
                return res.status(500).json({ message: "This "+itemCode+" - Item is Already Exist, Therefore can't be added" });
            }

        }catch (error: unknown){
            if(error instanceof Error){
                return res.status(500).json({ message: error.message });
            }else {
                return res.status(500).json({ message: "Unknown Error Occured..!" });
            }
        }
    };

    saveItemImages: RequestHandler = async(req: Request, res: Response): Promise<Response> => {
        try {
            // Save Item Images
            const { itemCode } = req.params;

            // Check the whether relevant item already exists or not
            let item = await Item.findOne({ itemCode: itemCode });
            if(item) {
                if(req.file?.originalname) {
                    console.log(item);
                    item.itemImage = req.file?.originalname;
                    item = await item.save();
                    if(item){
                        return res.status(200).json({ message: "Item Images has been Successfully Saved" });
                    }else {
                        return res.status(500).json({ message: "Oops, Please try again..!" });
                    }
                }else {
                    return res.status(500).json({ message: "Something Went wrong, Please Upload Image..!" });
                }
            }else {
                return res.status(500).json({ message: "There is no Item exist for this "+itemCode+" item Code to Upload Images" });
            }

        }catch (error: unknown){
            if(error instanceof Error){
                return res.status(500).json({ message: error.message });
            }else {
                return res.status(500).json({ message: "Unknown Error Occured..!" });
            }
        }
    };

    updateItem: RequestHandler = async(req: Request, res: Response): Promise<Response> => {
        try {
            // Update Item
            const { itemCode, itemType, itemName, description, unitPrice, qtyOnHand } = req.body;

            let item = await Item.findOne({ itemCode: itemCode });

            if(item) {
                item.itemType = itemType;
                item.itemName = itemName;
                item.description = description;
                item.unitPrice = unitPrice;
                item.qtyOnHand = qtyOnHand;

                item = await item.save();
                console.log(item);
                return res.status(200).json({ message: "Item has been Successfully Updated" });
            }else {
                return res.status(500).json({ message: "There is no Item belongs to this "+itemCode+" item Code" });
            }

        }catch(error: unknown) {
            if(error instanceof Error) {
                return res.status(500).json({ message: error.message });
            }else {
                return res.status(500).json({ message: "Unknown Error Occured..!" });
            }
        }
    };

    deleteItem: RequestHandler = async(req: Request, res: Response): Promise<Response> => {
        try{
            // Delete Item
            const { itemCode } = req.params;

            let deletedItem = await Item.findOneAndDelete({itemCode: itemCode});
            if(deletedItem){
                console.log("Deleted Item : "+deletedItem);
                return res.status(200).json({message: "Item has been Successfully Deleted"});
            }else{
                return res.status(500).json({message: "There is no Item to be Deleted"});
            }

        }catch(error: unknown){
            if(error instanceof Error){
                return res.status(500).json({message: error.message});
            }else{
                return res.status(500).json({message: "Unknown error Occured..!"});
            }
        }
    };

    searchItem: RequestHandler = async(req: Request, res: Response): Promise<Response> => {
        try{
            // Search Item
            const { itemCode } = req.params;
            let item = await Item.findOne({ itemCode: itemCode });
            if(item){
                return res.status(200).json({message: "Item has been loaded", response: item});
            }else{
                return res.status(500).json({message: "There is no Item exists by this Item Code - "+itemCode});
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
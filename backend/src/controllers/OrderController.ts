import { Request, Response, RequestHandler } from 'express';
import { Order } from '../models/Order';
import mongoose, { ClientSession } from 'mongoose';
import { OrderDetail } from '../models/OrderDetail';
import { Item } from '../models/Item';

export default class OrderController {
    getAllOrders: RequestHandler = async(req: Request, res: Response): Promise<Response> => {
        try{
            let allOrders = await Order.find();
            return res.status(200).json({ message: "Successfully Loaded All Orders", response: allOrders });

        }catch(error: unknown){
            if(error instanceof Error){
                return res.status(500).json({ message: error.message });
            }else {
                return res.status(500).json({ message: "Unknown Error Occured..!" });
            }
        }
    };

    getAllOrdersFromStatus: RequestHandler = async(req: Request, res: Response): Promise<Response> => {
        return res;
    };

    generateNewOrderID: RequestHandler = async(req: Request, res:Response): Promise<Response> => {
        try{
            // Get last Order ID
            let order = await Order.findOne({}, {}, { sort: { orderID: -1 } });
            let newOrderID;

            if (order) {
              console.log('Last order ID:', order.orderID);
              let lastOrderID = order.orderID;
              let firstString = lastOrderID.split('-')[0];
              let number: number = parseInt(lastOrderID.split('-')[1]);
              ++number;
              if(number < 10){
                newOrderID = firstString+"-00"+number;
              }else if(number < 100){
                newOrderID = firstString+"-0"+number;
              }else if(number < 1000){
                newOrderID = firstString+"-"+number;
              }

              return res.status(200).json({ message: "Successfully Generated New Order ID", response: newOrderID });

            } else {
                newOrderID = "OID-001";
                return res.status(200).json({ message: "Successfully Generated New Order ID", response: newOrderID });
            }

        }catch(error: unknown){
            if(error instanceof Error){
                return res.status(500).json({ message: error.message });
            }else {
                return res.status(500).json({ message: "Unknown Error Occured..!" });
            }
        }
    }

    purchaseOrder: RequestHandler = async(req: Request, res: Response): Promise<Response> => {
        let session: ClientSession | null = null;

        try {
            let { orderDetails } = req.body;
            if(orderDetails.length > 0){
                const { orderID, orderDate, orderTime, subTotal, deliveryFee, totalCost, orderStatus, deliveryLocation, customerID } = req.body;
                session = await mongoose.startSession();
                session.startTransaction();

                let order = await Order.findOne({ orderID: orderID });
                if(!order){
                    order = new Order({
                        orderID: orderID,
                        orderDate: orderDate,
                        orderTime: orderTime,
                        subTotal: subTotal,
                        deliveryFee: deliveryFee,
                        totalCost: totalCost,
                        orderStatus: orderStatus,
                        orderLocation: deliveryLocation,
                        customerID: customerID
                    });

                    order = await order.save();
                }else {
                    return res.status(500).json({ message: "This "+orderID+" - Order is Already Exist, Therefore Can't be Purchased" });
                }

                //Saving Tags
                if(orderDetails.length > 0){
                    for (let detail of orderDetails) {
                        let orderDetail = new OrderDetail({
                            orderID: orderID,
                            itemCode: detail.itemCode,
                            itemName: detail.itemName,
                            unitPrice: detail.unitPrice,
                            orderedQty: detail.orderedQty,
                        });
                        orderDetail = await orderDetail.save();
                        let item = await Item.findOne({ itemCode: detail.itemCode });
                        if(item){
                            item.qtyOnHand = item.qtyOnHand - detail.orderedQty;
                            item = await item.save();
                        }
                    }
                }

                await session.commitTransaction();
                session.endSession();

                return res.status(200).json({ message: "Order has been Sucessfully Placed..!" });
            }else {
                return res.status(500).json({ message: "Can't Place Order Cause there is No Selected Items..!" });
            }


        }catch(error: unknown){
            if(session != null){
                try{
                    await session.abortTransaction(); // Session roll back
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

    searchOrder: RequestHandler = async(req: Request, res: Response): Promise<Response> => {
        return res;
    };

    updateOrderStatus: RequestHandler = async(req: Request, res: Response): Promise<Response> => {
        try {
            // Update Order
            const { orderID, orderStatus } = req.params;

            let order = await Order.findOne({ orderID: orderID });

            if(order) {
                order.orderStatus = orderStatus;

                if(orderStatus == "Denied"){
                    let session: ClientSession | null = null;
                    try{
                        session = await mongoose.startSession();
                        session.startTransaction();
    
                        let allOrderDetails = await OrderDetail.find({ orderID: orderID });
    
                        if(allOrderDetails.length > 0){
                            for (let detail of allOrderDetails) {
                                let item = await Item.findOne({ itemCode: detail.itemCode });
                                if(item){
                                    item.qtyOnHand = item.qtyOnHand + detail.orderedQty;
                                    item = await item.save();
                                }
                            }
                        }

                        // Delete Order
                        order = await Order.findOneAndDelete({ orderID: orderID });

                        // Delete Order Details
                        await OrderDetail.deleteMany({ orderID: orderID });

                        await session.commitTransaction();
                        session.endSession();
        
                        return res.status(200).json({ message: "Order has been Sucessfully Denied..!" });

                    }catch(error: unknown){
                        if(session != null){
                            try{
                                await session.abortTransaction(); // Session roll back
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
                }else {
                    order = await order.save();
                }
            }else {
                return res.status(500).json({ message: "There is no Order belongs to this "+orderID+" Order ID" });
            }

            return res.status(200).json({ message: "Order Status has been Successfully Updated" });

        }catch(error: unknown) {
            if(error instanceof Error) {
                return res.status(500).json({ message: error.message });
            }else {
                return res.status(500).json({ message: "Unknown Error Occured..!" });
            }
        }
    };
};
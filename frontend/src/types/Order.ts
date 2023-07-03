import { OrderDetail } from "./OrderDetail";

export type Order = {
    orderID: string;
      orderDate: string;
      orderTime: string;
      subTotal: number;
      deliveryFee: number;
      totalCost: number;
      orderStatus: string;
      customerID: string;
      deliveryLocation: string;
      orderDetails: OrderDetail[]
}
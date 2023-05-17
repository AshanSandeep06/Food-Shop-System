import { MotionProps } from "framer-motion";
import { motion } from "framer-motion";

export type ItemList = {
    itemCode: string;
    itemType: string;
    itemName: string;
    view: React.ReactNode;
    description: string;
    unitPrice: string;
    qtyOnHand: number;
    discount: number;
};
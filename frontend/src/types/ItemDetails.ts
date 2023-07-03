export type ItemDetails = {
    itemCode: string;
    itemType: string;
    itemName: string;
    itemImage: string;
    description: string;
    unitPrice: number;
    qtyOnHand: number;
    discount?: number;
}
export type StaticFoodItems = {
    _id: number;
    title: string;
    description: string;
    price: string;
    imagePath: string;
  }

export type StaticFoodsList = {
    items: StaticFoodItems[];
  }
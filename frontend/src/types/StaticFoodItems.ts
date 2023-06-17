export type StaticFoodItems = {
    _id: string;
    title: string;
    description: string;
    price: string;
    imagePath: string;
  }

export type StaticFoodsList = {
    items: StaticFoodItems[];
  }
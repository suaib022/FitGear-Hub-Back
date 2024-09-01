import { TCategories } from './product.Constant';

export type TProduct = {
  name: string;
  price: number;
  description: string;
  image: string;
  category: TCategories;
  quantity: number;
  inStock?: boolean;
};

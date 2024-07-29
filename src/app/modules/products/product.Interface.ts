import { Model } from 'mongoose';

export type TProduct = {
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  quantity: number;
  inStock?: boolean;
};

export interface ProductModel extends Model<TProduct> {
  doesProductExist(name: string): Promise<TProduct | null>;
}

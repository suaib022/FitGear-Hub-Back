import { Model, Types } from 'mongoose';

export type TCart = {
  product: Types.ObjectId;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  quantity: number;
};

export interface CartModel extends Model<TCart> {
  doesCartItemExist(name: string): Promise<TCart | null>;
}

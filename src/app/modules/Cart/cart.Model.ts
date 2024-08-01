import { model, Schema } from 'mongoose';
import { TCart } from './cart.Interface';

const cartSchema = new Schema<TCart>({
  product: { type: Schema.Types.ObjectId, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  quantity: { type: Number, required: true },
});

cartSchema.statics.doesCartItemExist = async function (name: string) {
  const existingCartItem = await Cart.findOne({ name });
  return existingCartItem;
};

export const Cart = model<TCart>('Cart', cartSchema);

import { model, Schema } from 'mongoose';
import { TProduct } from './product.Interface';

const productSchema = new Schema<TProduct>({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  quantity: { type: Number, required: true },
  inStock: { type: Boolean, default: true },
});

productSchema.statics.doesProductExist = async function (name: string) {
  const existingProduct = await Product.findOne({ name });
  return existingProduct;
};

export const Product = model<TProduct>('Product', productSchema);

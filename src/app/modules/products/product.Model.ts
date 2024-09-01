import { model, Schema } from 'mongoose';
import { TProduct } from './product.Interface';
import { categories } from './product.Constant';

const productSchema = new Schema<TProduct>(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    category: {
      type: String,
      enum: {
        values: categories,
        message: `Categories must be one of ${categories}`,
      },
    },
    quantity: { type: Number, required: true },
    inStock: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  },
);

export const Product = model<TProduct>('Product', productSchema);

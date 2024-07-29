import { TProduct } from './product.interface';
import { Product } from './product.Model';

const createProductIntoDB = async (payload: TProduct) => {
  const existingProduct = await Product.doesProductExist(payload.name);

  if (existingProduct) {
    existingProduct.quantity += payload.quantity;
    await existingProduct.save();
    if (existingProduct.quantity > 0) {
      existingProduct.quantity.inStock = true;
      await existingProduct.save();
    }

    return existingProduct;
  } else {
    const result = await Product.create(payload);
    return result;
  }
};

const getAllProductsFromDB = async () => {
  const result = await Product.find();
  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
};

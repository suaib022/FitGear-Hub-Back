import { TProduct } from './product.interface';
import { Product } from './product.Model';

const createProductIntoDB = async (productData: TProduct) => {
  const existingProduct = await Product.doesProductExist(productData.name);

  if (existingProduct) {
    existingProduct.quantity += productData.quantity;
    await existingProduct.save();
    if (existingProduct.quantity > 0) {
      existingProduct.quantity.inStock = true;
      await existingProduct.save();
    }

    return existingProduct;
  } else {
    const result = await Product.create(productData);
    return result;
  }
};

export const ProductServices = {
  createProductIntoDB,
};

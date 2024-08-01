import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { TProduct } from './product.Interface';
import { Product } from './product.Model';
import { Cart } from '../Cart/cart.Model';

const createProductIntoDB = async (payload: TProduct) => {
  // const existingProduct = await Product.doesProductExist(payload.name);

  // if (existingProduct) {
  //   existingProduct.quantity += payload.quantity;
  //   await existingProduct.save();
  //   if (existingProduct.quantity > 0) {
  //     existingProduct.inStock = true;
  //     await existingProduct.save();
  //   }

  //   return existingProduct;
  // } else {
  //   const result = await Product.create(payload);
  //   return result;
  // }

  const result = await Product.create(payload);
  return result;
};

const getAllProductsFromDB = async () => {
  const result = await Product.find();
  return result;
};

const getSingleProductFromDB = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};

const updateSingleProductIntoDB = async (id: string, updatedData: object) => {
  const existingProduct = await Product.findById(id);

  if (!existingProduct) {
    throw new Error('Product not found!');
  }
  const result = await Product.findByIdAndUpdate(
    id,
    { $set: updatedData },
    { new: true },
  );

  if (result!.quantity !== 0) {
    existingProduct.inStock = true;
    result!.inStock = true;
    await existingProduct.save();
  } else {
    existingProduct.inStock = false;
    result!.inStock = false;
    await existingProduct.save();
  }
  return result;
};

const deleteSingleProductFromDB = async (id: string) => {
  const existingProduct = await Product.findById(id);

  if (!existingProduct) {
    throw new AppError(httpStatus.UNAUTHORIZED, 'Product not found!');
  }
  const result = await Product.findByIdAndDelete(id);

  const existingCartItem = await Cart.findOne({ product: id });
  if (existingCartItem) {
    await Cart.deleteOne({ product: id });
  }
  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
  updateSingleProductIntoDB,
  deleteSingleProductFromDB,
};

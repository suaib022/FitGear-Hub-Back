import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { TProduct } from './product.Interface';
import { Product } from './product.Model';
import { Cart } from '../Cart/cart.Model';
import QueryBuilder from '../../builders/QueryBuilder';
import { Types } from 'mongoose';

const createProductIntoDB = async (payload: TProduct) => {
  const result = await Product.create(payload);
  return result;
};

const getAllProductsFromDB = async (query: Record<string, unknown>) => {
  const productSearchableFields = ['name', 'category'];

  const productQuery = new QueryBuilder(Product.find(), query)
    .search(productSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await productQuery.modelQuery;
  return result;
};

const getSingleProductFromDB = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};

const updateSingleProductIntoDB = async (id: string, updatedData: TProduct) => {
  const existingProduct = await Product.findById(id);
  // const existingCartItem = await Cart.findOne({ product: id });

  if (!existingProduct) {
    throw new Error('Product not found!');
  }

  const result = await Product.findByIdAndUpdate(
    id,
    { $set: updatedData },
    { new: true },
  );

  // if (result!.quantity < existingCartItem!.quantity) {
  //   existingCartItem!.quantity = result!.quantity;
  //   await existingCartItem?.save();
  // }

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

  // const existingCartItem = await Cart.findOne({ product: id });
  // if (existingCartItem) {
  //   await Cart.deleteOne({ product: id });
  // }
  return result;
};

const deleteMultipleProductsFromDB = async (ids: string[]) => {
  // const objectIds = ids.map((id: string) => new Types.ObjectId(id));

  const validIds = ids.filter((id) => Types.ObjectId.isValid(id));

  const objectIds = validIds.map((id) => new Types.ObjectId(id));

  const result = await Product.deleteMany({ _id: { $in: objectIds } });

  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
  updateSingleProductIntoDB,
  deleteSingleProductFromDB,
  deleteMultipleProductsFromDB,
};

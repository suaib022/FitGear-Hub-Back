import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { Product } from '../products/product.Model';
import { TCart } from './cart.Interface';
import { Cart } from './cart.Model';
import { TProduct } from '../products/product.Interface';
const createCartIntoDB = async (payload: TCart) => {
  // const existingProductInCart = await Cart.doesCartItemExist(payload.name);
  // const existingProductInDB = await Product.doesProductExist(payload.name);

  // if (existingProductInCart) {
  //   existingProductInCart.quantity += payload.quantity;
  //   await existingProductInCart.save();
  //   if (existingProductInCart.quantity > 0) {
  //     existingProductInCart.inStock = true;
  //     await existingProductInCart.save();
  //   }

  //   return existingProductInCart;
  // } else {
  //   const result = await Cart.create(payload);
  //   return result;
  // }

  // check if the product exists in DB
  const existingProductInDB = await Product.findById(payload.product);
  if (!existingProductInDB) {
    throw new AppError(httpStatus.NOT_FOUND, 'Product not found !');
  }

  // check if there is enough number of product quantity in stock
  if (existingProductInDB.quantity < payload.quantity) {
    throw new AppError(
      httpStatus.NOT_ACCEPTABLE,
      'Insufficient amount in stock !',
    );
  }

  // update products quantity in DB
  existingProductInDB.quantity -= payload.quantity;
  await existingProductInDB.save();

  // update inStock status if needed
  if (existingProductInDB.quantity === 0) {
    existingProductInDB.inStock = false;
    await existingProductInDB.save();
  }

  const existingCartItem = await Cart.findOne({ product: payload.product });

  if (existingCartItem) {
    existingCartItem.quantity += payload.quantity;
    await existingCartItem.save();
    return existingCartItem;
  }

  const result = await Cart.create(payload);
  return result;
};

const getAllCartItemsFromDB = async () => {
  const result = await Cart.find();
  return result;
};

const getSingleCartItemFromDB = async (id: string) => {
  const result = await Cart.findById(id);
  return result;
};

const updateSingleCartItemInDB = async (id: string, updatedData: TCart) => {
  const existingCartItem = await Cart.findById(id);
  const existingProductInDB = await Product.findById(existingCartItem?.product);
  if (!existingCartItem) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      'Product not found in cart section !',
    );
  }

  const cartItemQuantity = existingCartItem.quantity;
  const updatedCartItemQuantity = updatedData.quantity;

  if (updatedCartItemQuantity > cartItemQuantity) {
    if (
      updatedCartItemQuantity - cartItemQuantity >
      existingProductInDB!.quantity
    ) {
      throw new AppError(
        httpStatus.BAD_REQUEST,
        'Insufficient amount in stock !',
      );
    }
    existingProductInDB!.quantity -= updatedCartItemQuantity - cartItemQuantity;
    await existingProductInDB?.save();
    if (existingProductInDB!.quantity === 0) {
      existingProductInDB!.inStock = false;
      await existingProductInDB?.save();
    }
  } else if (updatedCartItemQuantity < cartItemQuantity) {
    existingProductInDB!.quantity += cartItemQuantity - updatedCartItemQuantity;
    existingProductInDB!.inStock = true;
    await existingProductInDB?.save();
  }

  const result = await Cart.findByIdAndUpdate(
    id,
    { $set: updatedData },
    { new: true },
  );
  return result;
};

export const CartServices = {
  createCartIntoDB,
  getAllCartItemsFromDB,
  getSingleCartItemFromDB,
  updateSingleCartItemInDB,
};

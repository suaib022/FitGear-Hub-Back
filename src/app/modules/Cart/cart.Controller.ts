import httpStatus from 'http-status';
import { catchAsync } from '../../Utils/catchAsync';
import { CartServices } from './cart.Services';
import sendResponse from '../../Utils/sendResponse';

const createCart = catchAsync(async (req, res) => {
  const result = await CartServices.createCartIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product added to cart successfully !',
    data: result,
  });
});

const getAllCart = catchAsync(async (req, res) => {
  const result = await CartServices.getAllCartItemsFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Products retrieved successfully from cart !',
    data: result,
  });
});

const getSingleCart = catchAsync(async (req, res) => {
  const result = await CartServices.getSingleCartItemFromDB(req.params.cartId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `${result?.name} retrieved successfully from cart !`,
    data: result,
  });
});

const updateSingleCart = catchAsync(async (req, res) => {
  const result = await CartServices.updateSingleCartItemInDB(
    req.params.cartId,
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `${result?.name} updated successfully in cart !`,
    data: result,
  });
});

export const cartControllers = {
  createCart,
  getAllCart,
  getSingleCart,
  updateSingleCart,
};

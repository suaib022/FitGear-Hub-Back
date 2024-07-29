import { ProductServices } from './product.Service';
import { catchAsync } from '../../Utils/catchAsync';
import sendResponse from '../../Utils/sendResponse';
import httpStatus from 'http-status';

const createProduct = catchAsync(async (req, res) => {
  const result = await ProductServices.createProductIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product Created successfully !',
    data: result,
  });
});

export const ProductControllers = {
  createProduct,
};

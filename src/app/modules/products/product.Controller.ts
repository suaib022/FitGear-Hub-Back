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

const getAllProducts = catchAsync(async (req, res) => {
  const result = await ProductServices.getAllProductsFromDB(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Products retrieved successfully !',
    data: result,
  });
});

const getSingleProduct = catchAsync(async (req, res) => {
  const result = await ProductServices.getSingleProductFromDB(
    req.params.productId,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `${result?.name} retrieved successfully !`,
    data: result,
  });
});

const updateSingleProduct = catchAsync(async (req, res) => {
  const result = await ProductServices.updateSingleProductIntoDB(
    req.params.productId,
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `${result?.name} updated successfully !`,
    data: result,
  });
});

const deleteProduct = catchAsync(async (req, res) => {
  const { productId } = req.query;

  // in case of deleting single product
  if (productId) {
    const result = await ProductServices.deleteSingleProductFromDB(
      productId as string,
    );
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: `${result?.name} deleted successfully !`,
      data: result,
    });
    return;
  }

  // in case of deleting multiple products
  const { ids } = req.body;

  const result = await ProductServices.deleteMultipleProductsFromDB(ids);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `Selected products deleted successfully !`,
    data: result,
  });
});

export const ProductControllers = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateSingleProduct,
  deleteProduct,
};

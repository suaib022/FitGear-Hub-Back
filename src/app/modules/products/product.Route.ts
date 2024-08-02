import express from 'express';
import { ProductControllers } from './product.Controller';
import validateRequest from '../../middlewares/validateRequest';
import { ProductValidations } from './product.Validation';

const router = express.Router();

router.post(
  '/',
  validateRequest(ProductValidations.CreateProductValidationSchema),
  ProductControllers.createProduct,
);

router.get('/', ProductControllers.getAllProducts);

router.get('/:productId', ProductControllers.getSingleProduct);

router.put(
  '/:productId',
  validateRequest(ProductValidations.updateProductValidationSchema),
  ProductControllers.updateSingleProduct,
);

router.delete('/:productId', ProductControllers.deleteSingleProduct);

export const ProductRoutes = router;

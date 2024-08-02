import express from 'express';
import { cartControllers } from './cart.Controller';
import validateRequest from '../../middlewares/validateRequest';
import { CartValidations } from './cart.Validation';

const router = express.Router();

router.post(
  '/',
  validateRequest(CartValidations.CreateCartValidationSchema),
  cartControllers.createCart,
);

router.get('/', cartControllers.getAllCart);

router.get('/:cartId', cartControllers.getSingleCart);

router.put(
  '/:cartId',
  validateRequest(CartValidations.updateCartValidationSchema),
  cartControllers.updateSingleCart,
);

router.delete('/:cartId', cartControllers.deleteSingleCart);

export const CartRoutes = router;

import express from 'express';
import { cartControllers } from './cart.Controller';

const router = express.Router();

router.post('/', cartControllers.createCart);

router.get('/', cartControllers.getAllCart);

router.get('/:cartId', cartControllers.getSingleCart);

router.put('/:cartId', cartControllers.updateSingleCart);

export const CartRoutes = router;

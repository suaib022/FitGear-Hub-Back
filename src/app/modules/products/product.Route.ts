import express from 'express';
import { ProductControllers } from './product.Controller';

const router = express.Router();

router.post('/', ProductControllers.createProduct);

router.get('/', ProductControllers.getAllProducts);

router.get('/:productId', ProductControllers.getSingleProduct);

router.put('/:productId', ProductControllers.updateSingleProduct);

router.delete('/:productId', ProductControllers.deleteSingleProduct);

export const ProductRoutes = router;

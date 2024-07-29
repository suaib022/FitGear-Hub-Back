import express from 'express';
import { ProductControllers } from './product.Controller';

const router = express.Router();

router.post('/', ProductControllers.createProduct);

export const ProductRoutes = router;

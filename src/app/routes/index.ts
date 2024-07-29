import { Router } from 'express';
import { ProductRoutes } from '../modules/products/product.Route';

const router = Router();

interface RouteConfig {
  path: string;
  route: Router;
}

const moduleRoutes: RouteConfig[] = [
  {
    path: '/products',
    route: ProductRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;

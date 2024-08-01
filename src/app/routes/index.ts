import { Router } from 'express';
import { ProductRoutes } from '../modules/products/product.Route';
import { CartRoutes } from '../modules/Cart/cartRoutes';

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
  {
    path: '/carts',
    route: CartRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;

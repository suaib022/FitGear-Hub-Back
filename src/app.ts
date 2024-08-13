import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import router from './app/routes';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';
const app: Application = express();
// const port = 3000;

app.use(express.json());
app.use(cors({ origin: ['http://localhost:5173'] }));

app.use('/api', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World !');
});

app.use(globalErrorHandler);
app.use(notFound);

export default app;

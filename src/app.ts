import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import router from './app/routes';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';
const app: Application = express();

const corsOptions = {
  origin: 'https://fitgear-hub-front.vercel.app',
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use('/api', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World !');
});

app.use(globalErrorHandler);
app.use(notFound);

export default app;

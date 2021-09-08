import express from 'express';
import { ordersRoutes } from './routes/orders.routes';

const app = express();

app.use(express.json());

app.use("/orders", ordersRoutes);

app.listen(3000, () => console.log('Server is running'));

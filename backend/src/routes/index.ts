import express, { Router } from 'express';
import CustomerRoutes from './CustomerRoutes';
import UserRoutes from './UserRoutes';
import ItemRoutes from './ItemRoutes';
import OrderRoutes from './OrderRoutes';
import OrderDetailRoutes from './OrderDetailRoutes';
import DiscountRoutes from './DiscountRoutes';
import PaymentController from '../controllers/PaymentController';
import ReservationRoutes from './ReservationRoutes';
import PaymentRoutes from './PaymentRoutes';

const router: Router = Router();
const url_prefix = "/api/v1";

// Creating router middlwares to connect all routers into one location
router.use(`${url_prefix}/user`, new UserRoutes().getRouter());
router.use(`${url_prefix}/customer`, new CustomerRoutes().getRouter());
router.use(`${url_prefix}/item`, new ItemRoutes().getRouter());
router.use(`${url_prefix}/order`, new OrderRoutes().getRouter());
router.use(`${url_prefix}/orderDetail`, new OrderDetailRoutes().getRouter());
router.use(`${url_prefix}/discount`, new DiscountRoutes().getRouter());
router.use(`${url_prefix}/payment`, new PaymentRoutes().getRouter());
router.use(`${url_prefix}/reservation`, new ReservationRoutes().getRouter());

export default router;
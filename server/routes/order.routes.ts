import express from "express";
import { authorizRoles, isAuthenticated } from "../middleware/auth";
import { createOrder, getAllOrders } from "../controllers/order.controller";
const orderRouter = express.Router()

orderRouter.post("/create-order",isAuthenticated,createOrder)
orderRouter.get("/get-orders",isAuthenticated,authorizRoles("admin"),getAllOrders)

export default orderRouter
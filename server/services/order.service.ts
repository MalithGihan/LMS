import { NextFunction, Response } from "express";
import { CatchAsyncError } from "../middleware/catchAsyncErrors";
import OrderModel from "../models/orderModel";

// Assuming data is directly passed to the function
export const newOrder = CatchAsyncError(
  async (data: any, res: Response, next: NextFunction) => {
    const order = await OrderModel.create(data);

    res.status(201).json({
      success: true,
      order,
    });
  }
);

export const getAllOrderService = async (res:Response) => {
  const orders = await OrderModel.find().sort({createdAt:-1})

  res.status(201).json({
      success:true,
      orders
  })
}


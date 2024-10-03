require('dotenv').config();
import express, { Request,Response,NextFunction } from 'express'
export const app = express()
import cors from "cors"
import cookieParser from 'cookie-parser'
import {ErrorMiddleware} from './middleware/error';
import userRouter from './routes/user.routes';
import courseRouter from './routes/course.routes';
import orderRouter from './routes/order.routes';
import notificationRoute from './routes/notification.routes';
import analyticsRouter from './routes/analytics.route';
import layoutRouter from './routes/layout.route';

app.use(express.json({limit:"50mb"}))
app.use(cookieParser())

app.use(cors({
    origin: ['http://localhost:3000'],
    credentials: true
}))

app.use("/api/v1",userRouter,courseRouter,orderRouter,notificationRoute,analyticsRouter,layoutRouter)

app.get("/test", (req:Request, res: Response, next:NextFunction) =>{
    res.status(200).json({
        success:true,
        message:"API is working",
    })
})

app.all("*",(req:Request, res: Response, next:NextFunction) => {
    const err = new Error(`Route ${req.originalUrl} not found`) as any
    err.statusCode = 404;
    next(err)
})

app.use(ErrorMiddleware)
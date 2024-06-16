import express from "express";
import { activationUser, registrationUser } from "../controllers/user.controller";

const userRouter = express.Router()

userRouter.post('/registration', registrationUser)
userRouter.post('/activate-user', activationUser)

export default userRouter
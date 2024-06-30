import express from "express";
import { activationUser, deleteUser, getAllUsers, getUserInof, loginUser, logoutUser, registrationUser, socialAuth, updateAccessToken, updatePassword, updateProfilePicture, updateUserInfo, updateUserRole } from "../controllers/user.controller";
import { authorizRoles, isAuthenticated } from "../middleware/auth";

const userRouter = express.Router()

userRouter.post('/registration', registrationUser)
userRouter.post('/activate-user', activationUser)
userRouter.post('/login', loginUser)
userRouter.get('/logout',isAuthenticated, logoutUser)
userRouter.get("/refresh", updateAccessToken)
userRouter.get("/me", isAuthenticated, getUserInof)
userRouter.get("/social-auth", socialAuth)
userRouter.put("/update-user-info", isAuthenticated,updateUserInfo)
userRouter.put("/update-user-password", isAuthenticated,updatePassword)
userRouter.put("/update-user-avatar", isAuthenticated,updateProfilePicture)
userRouter.get("/get-users", isAuthenticated,authorizRoles("admin"),getAllUsers)
userRouter.put("/update-user", isAuthenticated,authorizRoles("admin"),updateUserRole)
userRouter.delete("/delete-user/:id", isAuthenticated,authorizRoles("admin"),deleteUser)

export default userRouter
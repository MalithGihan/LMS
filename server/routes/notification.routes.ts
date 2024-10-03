import express from "express";
import { authorizRoles, isAuthenticated } from "../middleware/auth";
import { getNotifications, updateNotfication } from "../controllers/notification.controller";
const notificationRoute = express.Router();

notificationRoute.get(
  "/get-all-notification",
  isAuthenticated,
  authorizRoles("admin"),
  getNotifications
);

notificationRoute.put("/update-notification/:id",isAuthenticated,authorizRoles("admin"),updateNotfication)

export default notificationRoute;

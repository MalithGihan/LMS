import express from 'express'
import { authorizRoles, isAuthenticated } from '../middleware/auth'
import { getCoursesAnalytics, getOrdersAnalytics, getUserAnalytics } from '../controllers/analytics.controller'
const analyticsRouter = express.Router()


analyticsRouter.get("/get-user-analytics",isAuthenticated,authorizRoles("admin"),getUserAnalytics)
analyticsRouter.get("/get-courses-analytics",isAuthenticated,authorizRoles("admin"),getCoursesAnalytics)
analyticsRouter.get("/get-orders-analytics",isAuthenticated,authorizRoles("admin"),getOrdersAnalytics)

export default analyticsRouter
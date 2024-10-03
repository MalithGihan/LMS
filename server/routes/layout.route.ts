import express from 'express'
import { authorizRoles, isAuthenticated } from '../middleware/auth'
import { createLayout, editLayout, getLayoutByType } from '../controllers/layout.controller'
const layoutRouter = express.Router()

layoutRouter.post("/create-layout",isAuthenticated,authorizRoles("admin"),createLayout)
layoutRouter.put("/edit-layout",isAuthenticated,authorizRoles("admin"),editLayout)
layoutRouter.get("/get-layout", getLayoutByType)


export default layoutRouter
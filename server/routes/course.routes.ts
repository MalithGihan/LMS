import express from "express";
import { addAnswer, addQuestion, editCourse, getAllCourses, getCourseByUser, getSingleCourse, uploadCourse } from "../controllers/course.controller";
import { authorizRoles, isAuthenticated } from "../middleware/auth";
const courseRouter = express.Router();

courseRouter.post(
  "/create_course",
  isAuthenticated,
  authorizRoles("admin"),
  uploadCourse
);

courseRouter.put(
  "/edit_course/:id",
  isAuthenticated,
  authorizRoles("admin"),
  editCourse
);

courseRouter.get(
  "/get_course/:id",
  getSingleCourse
);

courseRouter.get(
  "/get_courses",
  getAllCourses
);

courseRouter.get(
  "/get_course-content/:id",
  isAuthenticated,
  getCourseByUser
);

courseRouter.put(
  "/add-question",
  isAuthenticated,
  addQuestion
);

courseRouter.put(
  "/add-answer",
  isAuthenticated,
  addAnswer
);

export default courseRouter
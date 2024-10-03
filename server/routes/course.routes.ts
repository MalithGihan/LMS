import express from "express";
import {
  addAnswer,
  addQuestion,
  addReplyToReview,
  addReview,
  deleteCourse,
  editCourse,
  getAllCourses,
  getCourseByUser,
  getSingleCourse,
  uploadCourse,
} from "../controllers/course.controller";
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

courseRouter.get("/get_course/:id", getSingleCourse);

courseRouter.get("/get_courses", getAllCourses);

courseRouter.get("/get_course-content/:id", isAuthenticated, getCourseByUser);

courseRouter.put("/add-question", isAuthenticated, addQuestion);

courseRouter.put("/add-answer", isAuthenticated, addAnswer);

courseRouter.put("/add-review/:id", isAuthenticated, addReview);

courseRouter.put(
  "/add-reply",
  isAuthenticated,
  authorizRoles("admin"),
  addReplyToReview
);

courseRouter.get(
  "/get-courses",
  isAuthenticated,
  authorizRoles("admin"),
  getAllCourses
);

courseRouter.delete(
  "/delete-course/:id",
  isAuthenticated,
  authorizRoles("admin"),
  deleteCourse
);

export default courseRouter;

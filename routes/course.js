import express from 'express';
import admin from "../middlewares/admin";
import courseController from '../controllers/courseController';

let router = express.Router();

router.get("/courses", courseController.fetchAll);
router.get("/course/:id", courseController.fetchCourse);

router.post("/courses/new", admin, courseController.newCourse);
router.post("/course/:id", admin, courseController.updateCourse);
router.post("/course/:id/videos", admin, courseController.updateVideo);

export default router;
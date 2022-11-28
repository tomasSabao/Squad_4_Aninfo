const express = require("express");
const projectController = require('../controller/project.controller');
const router = express.Router();

router.post("/projects",projectController.postProject);
router.get("/projects",projectController.getProjects);
router.get("/projects/:id",projectController.getId);
router.put("/prjects/:id",projectController.updateProject);
router.delete("/projects/:id",projectController.deleteById);
router.patch("/projects/:id/projectName",projectController.updateStatus);

module.exports=router;
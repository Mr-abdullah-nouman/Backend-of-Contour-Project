const { saveUserExercise } = require("../controllers/user");
const { editUserExercise} = require("../controllers/user");
const {deleteUserExercise} = require("../controllers/user");
const router = require("express").Router();

// router.get('/save-excercise', saveUserExercise);
router.post("/save-excercise", saveUserExercise);
router.put("/edit-exercise", editUserExercise);
router.delete("delete-exercise", deleteUserExercise);
//
module.exports = router;

const router = require("express").Router(),
  UserController = require("../controllers/user");

router.get("/", UserController.index);
router.get("/:userid", UserController.show);
router.put("/:userid/update", UserController.update);
router.delete("/:userid/delete", UserController.delete);
router.post("/create", UserController.create);

module.exports = router;

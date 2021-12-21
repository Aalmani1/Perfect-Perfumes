const router = require("express").Router(),
  UserController = require("../controllers/user");

router.get("/", UserController.index);
router.get("/:userid", UserController.show);
router.put("/:userid/update", UserController.update);
router.delete("/:userid/delete", UserController.delete);
router.post("/create", UserController.create);



// router.get("./signup", UserController.signup_get);
router.post("/signup", UserController.signup_post);
// router.get("/login", UserController.login_get);
router.post("/login", UserController.login_post);
// router.post("/logout", UserController.logout_get);

module.exports = router;
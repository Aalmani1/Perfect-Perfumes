const router = require("express").Router(),
  AdminController = require("../controllers/admin");

router.get("/", AdminController.index);
router.get("/:adminid", AdminController.show);
router.put("/:adminid/update", AdminController.update);
router.delete("/:adminid/delete", AdminController.delete);
router.post("/create", AdminController.create);

module.exports = router;

const router = require("express").Router(),
  CartController = require("../controllers/cart");

router.get("/", CartController.index);
router.get("/:cartid", CartController.show);
router.put("/:cartid/update", CartController.update);
router.delete("/:cartid/delete", CartController.delete);
router.post("/create", CartController.create);

module.exports = router;

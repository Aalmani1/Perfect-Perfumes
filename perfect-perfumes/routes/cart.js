const router = require("express").Router(),
  CartController = require("../controllers/cart");

router.get("/", CartController.index);
router.get("/show/:id", CartController.show);
router.put("/:cartid/update", CartController.update);
router.delete("/delete/:userId/:id", CartController.delete);
router.post("/create", CartController.create);

module.exports = router;

const router = require("express").Router(),
  OrderController = require("../controllers/order");

router.get("/", OrderController.index);
router.get("/:orderid", OrderController.show);
router.put("/:orderid/update", OrderController.update);
router.delete("/:orderid/delete", OrderController.delete);
router.post("/create", OrderController.create);

module.exports = router;

const router = require("express").Router(),
  ProuductController = require("../controllers/product");

router.get("/", ProuductController.index);
router.get("/:productid", ProuductController.show);
router.put("/:productid/update", ProuductController.update);
router.delete("/:productid/delete", ProuductController.delete);
router.post("/create", ProuductController.create);

module.exports = router;

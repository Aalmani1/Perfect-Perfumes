const router = require("express").Router(),
  UserRoutes = require("./user"),
  ProuductRoutes = require("./product");
AdminRoutes = require("./admin");
OrderRoutes = require("./order");

router.use("/users", UserRoutes);
router.use("/products", ProuductRoutes);
router.use("/admins", AdminRoutes);
router.use("/orders", OrderRoutes);

module.exports = router;

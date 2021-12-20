const router = require("express").Router(),
  UserRoutes = require("./user"),
  ProuductRoutes = require("./product");
AdminRoutes = require("./admin");
OrderRoutes = require("./order");
CartRoutes = require("./cart");
// authRoutes = require("./authRoutes");

router.use("/users", UserRoutes);
router.use("/products", ProuductRoutes);
router.use("/admins", AdminRoutes);
router.use("/orders", OrderRoutes);
router.use("/carts", CartRoutes);
// router.use(authRoutes);

module.exports = router;

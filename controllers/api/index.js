const router = require("express").Router();

const demoRoutes = require("./demo-routes");

router.use("/demos", demoRoutes);

module.exports = router;

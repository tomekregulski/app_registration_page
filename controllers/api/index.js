const router = require("express").Router();

const demoRoutes = require("./demo-routes");

router.use("/demo", demoRoutes);

module.exports = router;

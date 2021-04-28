const router = require("express").Router();
const Demo = require("../models/Demo");

// route to get all demos
router.get("/", async (req, res) => {
  const demoData = await Demo.findAll().catch((err) => {
    res.json(err);
  });
  const demos = demoData.map((demo) => demo.get({ plain: true }));
  res.render("all", { demos });
});

// route to get one demo
router.get("/demo/:id", async (req, res) => {
  try {
    const demoData = await Demo.findByPk(req.params.id);
    if (!demoData) {
      res.status(404).json({ message: "No demo with this id!" });
      return;
    }
    const demo = demoData.get({ plain: true });
    res.render("demo", demo);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

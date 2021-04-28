const router = require("express").Router();
const Demo = require("../../models/Demo");

router.get("/", async (req, res) => {
  try {
    const demoData = await Demo.findAll();
    res.status(200).json(demoData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// route to create/add a demo
router.post("/", async (req, res) => {
  try {
    const demoData = await Demo.create({
      campaign: req.body.campaign,
      brand: req.body.brand,
      ba_name: req.body.ba_name,
      location: req.body.location,
    });
    res.status(200).json(demoData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const demoData = await Demo.update(
      {
        campaign: req.body.campaign,
        brand: req.body.brand,
        ba_name: req.body.ba_name,
        location: req.body.location,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json(demoData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

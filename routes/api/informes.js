const router = require("express").Router();

const {Informes } = require("../../db");

router.get("/", async (req, res) => {
  console.log(req.userId)
  const informes = await Informes.findAll();
  res.json(informes);
});
router.get("/:informesId", async (req, res) => {
    const informes = await informes.findOne({
    where: {id: req.params.informesId}
  });
  
  res.json(informes);
});

router.post("/", async (req, res) => {
  const informes = await informes.create(req.body);
  res.json(informes);
});

router.put("/:informesId", async (req, res) => {
  console.log("params", req.params)
  await informes.update(req.body, {
    where: {
      id: req.params.informesId,
    },
  });
  res.json({ success: "registro modificado" });
});

router.delete('/:informesId', async (req, res)=>{
    await informes.destroy ( {
        where: {id: req.params.informesId}
    })
    res.json({ success: "registro borrado" });
})
module.exports = router;

const router = require("express").Router();

const {Rastros } = require("../../db");

router.get("/", async (req, res) => {
  console.log(req.userId)
  const rastro = await Rastros.findAll();
  res.json(rastro);
});
router.get("/:rastroId", async (req, res) => {
    const rastro = await rastro.findOne({
    where: {id: req.params.rastroId}
  });
  
  res.json(rastro);
});

router.post("/", async (req, res) => {
  const rastro = await rastro.create(req.body);
  res.json(rastro);
});

router.put("/:rastroId", async (req, res) => {
  console.log("params", req.params)
  await rastro.update(req.body, {
    where: {
      id: req.params.rastroId,
    },
  });
  res.json({ success: "registro modificado" });
});

router.delete('/:rastroId', async (req, res)=>{
    await rastro.destroy ( {
        where: {id: req.params.rastroId}
    })
    res.json({ success: "registro borrado" });
})
module.exports = router;

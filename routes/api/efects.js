const router = require("express").Router();

const { Efect } = require("../../db");

router.get("/", async (req, res) => {
  console.log(req.userId)
  const efects = await Efect.findAll();
  res.json(efects);
});

router.post("/", async (req, res) => {
  const efect = await Efect.create(req.body);
  res.json(efect);
});

router.put("/:efectId", async (req, res) => {
  await Efect.update(req.body, {
    where: {
      id: req.params.efectId,
    },
  });
  res.json({ success: "registro modificado" });
});

router.delete('/:efectId', async (req, res)=>{
    await Efect.destroy ( {
        where: {id: req.params.efectId}
    })
    res.json({ success: "registro borrado" });
})
module.exports = router;

const router = require("express").Router();

const { Efect } = require("../../db");

// router.get('/', (req, res)=>{
//   res.send('FUNCIONA')
// })

router.get("/", async (req, res) => {
  // console.log(req.userId)
  const efects = await Efect.findAll();
  res.json(efects);
  res.send(efects)
});
router.get("/:efectId", async (req, res) => {
    const efects = await Efect.findOne({
    where: {id: req.params.efectId}
  });
  
  res.json(efects);
});

router.post("/", async (req, res) => {
  const efect = await Efect.create(req.body);
  res.json(efect);
});

router.put("/:efectId", async (req, res) => {
  console.log("params", req.params)
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

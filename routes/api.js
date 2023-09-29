
const router = require("express").Router();

const apiEfectsRouter = require("./api/efects");
const apiRastrosRouter = require("./api/rastros");
const apiUsersRouter = require("./api/users");
const apiInformesRouter = require("./api/informes");
// const middleware = require("./middlewares");

router.use("/efects",  apiEfectsRouter);
router.use("/users",  apiUsersRouter);
router.use("/rastros",  apiRastrosRouter);
router.use("/informes",  apiInformesRouter);
// middleware.checkToken,
module.exports = router;




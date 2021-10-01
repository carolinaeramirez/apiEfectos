const router = require("express").Router();

const apiEfectsRouter = require("./api/efects");
const apiUsersRouter = require("./api/users");
const middleware = require("./middlewares");

router.use("/efects", middleware.checkToken, apiEfectsRouter);
router.use("/users", apiUsersRouter);

module.exports = router;

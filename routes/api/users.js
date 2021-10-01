const router = require("express").Router();
const bcrypt = require("bcryptjs");
const { User } = require("../../db");
const { check, validationResult } = require("express-validator");
const moment = require("moment");
const jwt = require("jwt-simple");

router.post(
  "/register",
  [
    check("username", "NOMBRE DE USUARIO ERRONEO").not().isEmpty(),
    check("password", "PASSWORD ERRONEO").not().isEmpty(),
    check("email", "EMAIL INCORRECTO").isEmail(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errores: errors.array() });
    }

    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const user = await User.create(req.body);
    res.json(user);
  }
);

router.post("/login", async (req, res) => {
  const user = await User.findOne({ where: { email: req.body.email } });
  if (user) {
    const equal = bcrypt.compareSync(req.body.password, user.password);
    if (equal) {
      res.json({success: createToken(user)});
    } else {
      res.json({ error: "usuario y/o contraseña incorrectos" });
    }
  } else {
    res.json({ error: "error en usuario y/o contraseña" });
  }
});

const createToken = (user)=>{
    const payload ={
        userId: user.id,
        createAt: moment().unix(),
        expiredAt: moment().add(5, 'minutes').unix()
    }
    return jwt.encode(payload, 'frase secreta');
}



module.exports = router;

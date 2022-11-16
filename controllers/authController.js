const Usuarios = require("../models/Usuarios");

const {
    assertValidContraseñaService,
    assertEmailIsUniqueService,
    assertEmailIsValid,
    createUsuariosService,
    encryptContraseña,
  } = require("../services/authServices")

const jsonwebtoken = require ("jsonwebtoken"); 

async function authRegisterController(req, res) {
    const body = req.body;
    // validate Contraseña
    try {
        console.log(body.contraseña)
      assertValidContraseñaService(body.contraseña);
    } catch (error) {
      console.error(error);
      res.status(400).json({ message: "Contraseña incorrecta: " + error.message });
      return;
    }
    // validate email is valid
    try {
      assertEmailIsValid(body.email);
    } catch (error) {
      console.error(error);
      res.status(400).json({ message: "Email is invalid: " + error.message });
      return;
    }
    // validate email is unique
    try {
        console.error(body.email)
      await assertEmailIsUniqueService(body.email);
    } catch (error) {
      console.error(error);
      res.status(400).json({
        message: "Email is already registered: " + error.message,
      });
      return;
    }
    // save Usuarios
    try {
      const UsuariosCreated = await createUsuariosService(body);
      delete UsuariosCreated.Contraseña;
      console.log(body)
    //   delete UsuariosCreated._id;
      res.status(201).json(UsuariosCreated);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  }

  async function authLoginController(req, res) {
    

    try {
      const { email, contraseña } = req.body;
    const UsuariosFound = await Usuarios.findOne({where :{ email: email }});
    if (!UsuariosFound) {
      res.status(401).json({ message: "La constraseña o el email son incorrectos" });
      return;
    }
    const hashedContraseña = encryptContraseña(contraseña);
    if (hashedContraseña !== UsuariosFound.contraseña) {
      res.status(401).json({ message: "La contraseña o el email son incorrectos" });
      return;
    }
  
    const secret = process.env.JWT_SECRET || 'tomatesasesinos';
        console.log(secret)
  
    if (secret.length < 10) {
      throw new Error("JWT_SECRET is not set");
    }
  
    const jwt = jsonwebtoken.sign({
    //   uuid: UsuariosFound.uuid,
      email: UsuariosFound.email,
      created: Date.now(),
      rol: UsuariosFound.id_rol,
    }, secret);
  
    res.status(200).json({
      message: "Login successful",
      jwt: jwt,
    });
    } catch (error) {
      console.error(error);
      
    }
  }

  module.exports = {
    authLoginController,
    authRegisterController,
  };
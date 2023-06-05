import Register from "@/models/register";
import db from "@/utils/db";
import { setCookie } from 'cookies-next';

let bcrypt = require("bcryptjs");

export default async function login(req, res) {
  const { name, password } = req.body;
  if (!name || !password) {
    return;
  } else {
    await db();
    try {
      const loginUser = await Register.findOne({ name: name });

      const isMatch = await bcrypt.compare(password, loginUser.password);

      if (isMatch === true) {
        const token = await loginUser.generateAuthToken();
        setCookie("bisk_21", token, {req, res, httpOnly: true, maxAge: 60 * 60 *4})
        res.status(200).send(loginUser);
      } else {
        res.status(400).send("Invalid Credentials");
      }
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
}

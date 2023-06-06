import Register from "@/models/register";
import db from "@/utils/db";

//This is not for production
async function register(req, res) {
  const { name, password } = req.body;
  if (!name || !password) {
    return;
  } else {
    await db();
    try {
      const registerUser = await Register.create({ name, password });
      res.status(201).send({ registerUser });
    } catch (error) {
      res.status(401).send({ error });
    }
  }
}

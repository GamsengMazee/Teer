import db from "@/utils/db";
import myModel from "@/models/myModel";

/**
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */

export default async function addData(req, res) {
  if (!req.body) {
    return;
  }
  try {

     await db();

    const add = await myModel.create(req.body);
    res.status(201).json({ add })
    
  } catch (error) {
    res.status(400).send({ error });
  }
}

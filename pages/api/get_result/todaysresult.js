import db from "@/utils/db";
import myModel from "@/models/myModel";

/**
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */


export default async function getTeer(req, res) {
  try {
    await db();

    const result = await myModel.find();


    res.status(201).send(result);
    

  } catch (error) {
    res.status(404).send(error.message);
  }
}

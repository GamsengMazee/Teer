import db from "@/utils/db";
import heSchema from "@/models/he_teer";

/**
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */

export default async function get_data(req, res) {
  try {
    await db();

    const result = await heSchema.find();
    res.status(201).send(result);

  } catch (error) {
    res.status(404).send(error.message);
  }
}

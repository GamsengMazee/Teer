import db from "@/utils/db";
import heSchema from "@/models/he_teer";

/**
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */

export default async function update(req, res) {
  const { updateId } = req.query;
  const data = req.body;

  try {
    await db();
    const doc = await heSchema.findByIdAndUpdate({ _id: updateId }, {
      name: data.name,
      house: data.house,
      ending: data.ending,
      date: data.date
    },{
      new : true
    });

    res.status(201).json({ doc });
  } catch (error) {
    res.status(400).send({ error });
  }
}



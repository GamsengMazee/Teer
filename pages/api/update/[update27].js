import db from "@/utils/db";
import myModel from "@/models/myModel";

/**
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */

export default async function update(req, res) {
  const { update27 } = req.query;
  const data = req.body;

  if(update27 === undefined || data === undefined){
    return
  }

  await db();
  try {
    const doc = await myModel.findByIdAndUpdate({ _id: update27 }, {
      teer: data.teer,
      fr: data.fr,
      sr: data.sr,
      date: data.date
    },{
      new : true
    });

    res.status(201).json({ doc });
  } catch (error) {
    res.send({ error });
  }
}

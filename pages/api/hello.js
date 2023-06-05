// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import db from "@/utils/db";

export default async function handler(req, res) {
  res.send("HEllo DAD")

  console.log("CONNECTING TO DB.....");

  await db();

  console.log("CONNECTED TO DB....");
}

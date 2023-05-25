import mongoose from "mongoose";

const uri =
  `mongodb+srv://${process.env.UNAME}:${process.env.PASSWORD}@cluster0.2nrsjse.mongodb.net/?retryWrites=true&w=majority`;

const db = async () =>
  await mongoose.connect(uri);

export default db;

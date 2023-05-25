import Register from "@/models/register";
import db from "@/utils/db";
let jwt = require("jsonwebtoken");
import { getCookie } from "cookies-next";

export default async function auth0(req, res) {
  
  const token = getCookie('bisk_21', { req, res })
     
    try {
      await db();
      //verify token from user
      const id = jwt.verify(token, process.env.SECRET_KEY);
      const tokenId = JSON.stringify(id._id)

      //find the id from db
      const user = await Register.findOne({ _id: id._id });
      const userId = JSON.stringify(user._id)

      if(userId === tokenId){
        res.status(200).send({ user });
      }else{
        res.status(401).send({ message : "Anauthorized Access"})
      }
    } catch (error) {
      res.status(400).send({message: "Anauthorized Access"});
    }
  }


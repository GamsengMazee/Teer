import { Schema, model, models } from "mongoose";

const he_teer = new Schema({
    name: {
        type: String,
        required: true
    },
    house: {
        type: String,
        required: true
    },
    ending: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
})

const heSchema = models.he_teer || model("he_teer", he_teer)

export default heSchema;
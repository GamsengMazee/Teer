import { Schema, model, models } from "mongoose";

const teerSchema = new Schema({
    teer: {
        type: String,
        required: true
    },
    fr: {
        type: String,
    },
    sr: {
        type: String,
    },
    date: {
        type: String,
        required: true
    }
})

const myModel = models.teerResult || model("teerResult", teerSchema)

export default myModel;
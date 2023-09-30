import {Schema, model} from "mongoose"

const hairDresserSchema = new Schema({
    name: {type: String, required: true},
}, {timestamps: false});

const hairdresser = model("hairdresser", hairDresserSchema);
export default hairdresser; 
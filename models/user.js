import {Schema, model} from "mongoose"

const UserSchema = new Schema({
    name: {type: String, required: true},
    barber: {type: String, required: false},
    service: {type: String, required: false}
}, {timestamps: true});

const User = model("User", UserSchema);
export default User; 
    

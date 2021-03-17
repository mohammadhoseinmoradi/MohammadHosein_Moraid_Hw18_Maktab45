const mongoose = require('mongoose');
const { Schema } = mongoose;


const essentialSchema = {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
}

const UserSchema = new Schema({
    User_Name: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        validate(value) {
            let User = value.match(/^[a-zA-Z0-9!@#$%^&*]{4,}$/)
            console.log(User[0]);
            if (User[0].length !== value.length) {
                throw new Error(" User name be Should have a   a-z  or A-Z and 0-9! or @#$%^&*  and greater than 4 ")
            }
        }
    },
    User_First_Name: {
        ...essentialSchema,
        validate(value) {
            let Name = value.match(/^[a-zA-Z]{3,30}$/)
            console.log(Name[0]);
            if (Name[0].length !== value.length) {
                throw new Error(" First Name be Should have a   a-z  or A-Z and greater than 3 character")
            }
        }
    },
    User_Last_Name: {
        ...essentialSchema,
        validate(value) {
            let Name = value.match(/^[a-zA-Z]{3,30}$/)
            console.log(Name[0]);
            if (Name[0].length !== value.length) {
                throw new Error(" Last Name be Should have a   a-z  or A-Z and greater than 3 character ")
            }
        }
    },
    User_Password: {
        type: String,
        required: true,
        trim: true,

    },
    User_Gender: {
        ...essentialSchema,
        enum: ["female", "male", "other"],
        required: true
    },
    User_Birthday: {
        type: Date,
        default: new Date(),
        required: true
    },
    User_Email: {
        type: String,
        required: true,
        trim: true,
        validate(value) {
            let Name = value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
            console.log(Name[0]);
            if (Name[0].length !== value.length) {
                throw new Error(" Email be Should have a   a-z  or A-Z and 0-9! and @ and .com ")
            }
        }
    },
    User_Number: {
        type: String,
        required: true,
        trim: true,
        validate(value) {
            let Name = value.match(/^[0-9]{10,11}$/)

            if (Name[0].length !== value.length) {
                throw new Error(" Number be Should have a    0-9! and @ and .com ")
            }
        }
    }
});
module.exports = mongoose.model("User", UserSchema)
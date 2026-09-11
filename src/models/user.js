import mongoose from "mongoose";


const userSchema = new mongoose.Schema(
    {
        fullName:{
            type: String,
            required: true,
            trim: true,
        },

         email:{
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },

         password:{
            type: String,
            required: true,
            minlength: 8,
        },

        role: {
            type: String,
            enum: ["student", "admin"],
            default: "student",
        },

    },
    {
        timestamps: true,
    }
);


const user = mongoose.model("User", userSchema);

export default user;
import mongoose from "mongoose";


const bookSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },

        author: {
            type: String,
            required: true,
            trim: true,
        },

        category: {
            type: String,
            required: true,
            trim: true,
        },

        skillLevel: {
            type: String,
            required: true,
            trim: true,
        },

        tags: {
            type:[String],
            default: [],
        },
    },
    {
        timestamps: true,
    }
);


const Book = mongoose.model("Book", bookSchema);

export default Book;
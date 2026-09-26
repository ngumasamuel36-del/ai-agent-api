import mongoose from "mongoose";

const careerTrackSchema = new mongoose.Schema(
    {
        trackId: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },

        title: {
            type: String,
            required: true,
            trim: true,
        },

        keySkills: {
            type: [String],
            default: [],
        },

        industryDemand: {
            type: String,
            required: true,
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

const CareerTrack = mongoose.model("CareerTrack", careerTrackSchema);

export default CareerTrack;
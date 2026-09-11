import mongoose from "mongoose";

const profileSchema = new mongoose.Schema(
    {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        unique: true,
      },
      
      academicLevel: {
        type: String,
        required: true,
        trim: true,
      },

      major:{
        type: String,
        required: true,
        trim: true,
      },

      targetRole: {
        type: String,
        required: true,
        trim: true,
      },

      skills: {
        type: [String],
        default: [],
      },

      preferredGenres: {
        type: [String],
        default: [],
      },

      learningStyle: {
        type: String,
        required: true,
        trim: true,
      },
    },
    {
        timestamps: true,
    }
);

const Profile = mongoose.model("Profile", profileSchema);

export default Profile;
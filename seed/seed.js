import "dotenv/config";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

import User from "../src/models/user.js";
import Profile from "../src/models/profile.js";
import Book from "../src/models/Book.js";
import CareerTrack from "../src/models/CareerTrack.js";

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    console.log("MongoDB connected");

    // Clear existing seed data
    await User.deleteMany({});
    await Profile.deleteMany({});
    await Book.deleteMany({});
    await CareerTrack.deleteMany({});

    console.log("Existing data cleared");

    // Password hashing
    const hashedPassword = await bcrypt.hash("SecurePassword123!", 12);

    // Create user
    const user = await User.create({
      fullName: "Alex Morgan",
      email: "alex.morgan@university.edu",
      password: hashedPassword,
      role: "student",
    });

    // Create student profile
    await Profile.create({
      userId: user._id,
      academicLevel: "Undergraduate",
      major: "Computer Science",
      targetRole: "Backend Developer",
      skills: ["JavaScript", "Node.js", "SQL"],
      preferredGenres: ["System Design", "Cloud Computing"],
      learningStyle: "Practical Project-Based",
    });

    // Create books
    await Book.insertMany([
      {
        title: "Designing Data-Intensive Applications",
        author: "Martin Kleppmann",
        category: "Backend",
        skillLevel: "Intermediate",
        tags: ["distributed systems", "databases", "architecture"],
      },
      {
        title: "Clean Code",
        author: "Robert C. Martin",
        category: "Software Engineering",
        skillLevel: "Beginner",
        tags: ["refactoring", "best practices"],
      },
    ]);

    // Create career tracks
    await CareerTrack.insertMany([
      {
        trackId: "tr_backend_01",
        title: "Backend Engineering",
        keySkills: [
          "Node.js",
          "SQL/NoSQL",
          "System Design",
          "API Security",
        ],
        industryDemand: "High",
      },
    ]);

    console.log("Database seeded successfully");

    await mongoose.disconnect();

    console.log("MongoDB disconnected");
  } catch (error) {
    console.error("Database seeding failed:", error.message);
    process.exit(1);
  }
};

seedDatabase();
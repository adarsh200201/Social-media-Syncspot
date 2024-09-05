import mongoose from "mongoose";

const userIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

export const users = [
  {
    _id: userIds[0],
    firstName: "test",
    lastName: "me",
    email: "aaaaaaa@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p11.jpeg",
    friends: [],
    location: "San Fran, CA",
    occupation: "Software Engineer",
    viewedProfile: 14561,
    impressions: 888822,
    createdAt: 1115211422,
    updatedAt: 1115211422,
    __v: 0,
  },
  // Add other users as per your requirement
];

export const posts = [
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[0], // Replace with valid userIds as per your new setup
    firstName: "test",
    lastName: "me",
    location: "San Fran, CA",
    description: "Sample post description",
    picturePath: "sample_post.jpeg",
    userPicturePath: "p11.jpeg",
    likes: new Map(),
    comments: [],
  },
  // Add other posts as per your requirement
];

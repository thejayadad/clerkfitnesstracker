import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  age: {
    type: Number,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  height: {
    type: Number,
    required: true
  },
  gender: {
    type: String,
    enum: ['male', 'female'],
    required: true
  },
  goal: {
    type: String,
    enum: ['lose', 'maintain', 'gain'],
    default: 'maintain'
  },
  activityLevel: {
    type: String,
    enum: ['sedentary', 'lightly active', 'moderately active', 'very active', 'extra active'],
    required: true
  },
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;

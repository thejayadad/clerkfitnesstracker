import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  age: {
    type: Number,
  },
  weight: {
    type: Number,
  },
  height: {
    type: Number,
  },
  gender: {
    type: String,
    enum: ['male', 'female'],
  },
  goal: {
    type: String,
    enum: ['lose', 'maintain', 'gain'],
    default: 'maintain'
  },
  activityLevel: {
    type: String,
    enum: ['sedentary', 'lightly active', 'moderately active', 'very active', 'extra active'],
  },
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;

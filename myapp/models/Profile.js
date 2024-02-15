// profile.js

import mongoose from 'mongoose';

const { Schema } = mongoose;

const profileSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  owner: {
    type: String,
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

const Profile = mongoose.models.Profile || mongoose.model('Profile', profileSchema);

export default Profile;



import mongoose from 'mongoose';

const { Schema } = mongoose;

const workoutSchema = new Schema({
    creator: {type: String, required: true},
    title: String,
    duration: Number,
    calories: Number,
   }, {timestamps: true})

const Workout = mongoose.models.Workout || mongoose.model('Workout', workoutSchema);

export default Workout;

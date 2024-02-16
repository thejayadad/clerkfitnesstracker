'use server'
// 'use server'
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import connectDB from "./db";
import Profile from "@/models/Profile";

export default async function grabUsername(formData) {
    const username = formData.get('username');
    await connectDB();
    const existingPageDoc = await Profile.findOne({ uri: username });
    if (existingPageDoc) {
        return false;
    } else {
        const session = await getServerSession(authOptions);
        return await Profile.create({
            username: username,
            owner: session?.user?.email,
        });
    }
}

export async function updateUsername(formData) {
    await connectDB();

    const username = formData.get('username');
    const age = formData.get('age');
    const weight = formData.get('weight');
    const height = formData.get('height');
    const gender = formData.get('gender');
    const goal = formData.get('goal');
    const activityLevel = formData.get('activityLevel');

    try {
        const session = await getServerSession(authOptions);
        const updatedProfile = await Profile.findOneAndUpdate(
            { owner: session?.user?.email },
            {
                username: username,
                age: age,
                weight: weight,
                height: height,
                gender: gender,
                goal: goal,
                activityLevel: activityLevel
            },
            { new: true } 
        );
        return updatedProfile;
    } catch (error) {
        throw new Error("Failed to update profile! " + error);
    }
}

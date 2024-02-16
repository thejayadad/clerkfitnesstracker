'use server'
import connectDB from "./db"
import Profile from "@/models/Profile"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"

export const getProfile = async () => {
    const session = await getServerSession(authOptions)
    console.log("user " + session)
    try {
       await connectDB()
       const profile = await Profile.find({ owner: session?.user?.email });
       const profileData = {
        username: profile.username,
        owner: profile.owner,
        age: profile.age,
        weight: profile.weight,
        height: profile.height,
        gender: profile.gender,
        goal: profile.goal,
        activityLevel: profile.activityLevel
    };

    return profileData;
    } catch (error) {
        throw new Error("Failed to fetch Profle! " + error);

    }

}
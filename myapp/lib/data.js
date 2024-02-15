'use server'
import exp from "constants"
import connectDB from "./db"
import Profile from "@/models/Profile"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"

export const getProfile = async () => {
    const session = await getServerSession(authOptions)
    console.log("user " + session)
    try {
       await connectDB()
       const profile = await Profile.find({owner: session?.user?.email})
       return profile
    } catch (error) {
        throw new Error("Failed to fetch Profle! " + error);

    }

}
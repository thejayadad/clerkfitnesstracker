'use server'
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import {getServerSession} from "next-auth";
import connectDB from "./db";
import Profile from "@/models/Profile"

export default async function grabUsername(formData) {
    const username = formData.get('username');
    await connectDB()
    const existingPageDoc = await Profile.findOne({uri:username});
    if (existingPageDoc) {
        return false;
      } else {
        const session = await getServerSession(authOptions);
        return await Profile.create({
          username: username,
          owner:session?.user?.email,
        });
      }

}
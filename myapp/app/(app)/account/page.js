import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import UsernameForm from '@/components/Forms/UsernameForm'
import HeroText from '@/components/HomePage/HeroText'
import SetupContainer from '@/components/HomePage/SetupContainer'
import FormContainer from '@/components/shared/FormContainer'
import connectDB from '@/lib/db'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import React from 'react'
import Profile from "@/models/Profile"
import cloneDeep from 'clone-deep';
import { updateUsername } from '@/lib/action'
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import { FiPlus } from 'react-icons/fi'
import { FiTarget } from 'react-icons/fi';



const AccountPage = async ({ searchParams }) => {
    const session = await getServerSession(authOptions)
    const desiredUsername = searchParams.desiredUsername
    if (!session) {
        return redirect('/')
    }
    await connectDB()
    const profile = await Profile.findOne({ owner: session?.user?.email })

    if (!profile) {
        return (
            <SetupContainer>
                <HeroText
                    heading="Setup Your Username"
                    subtext="Think Of Something Good That Describes & Motivates You"
                />
                <FormContainer>
                    <UsernameForm desiredUsername={desiredUsername} />
                </FormContainer>
            </SetupContainer>
        )
    }

    const leanPage = cloneDeep(profile.toJSON());
    leanPage._id = leanPage._id.toString();

    return (
        <div className="h-full p-4 space-y-2 flex 
        justify-center"
        style={{
            marginTop: '-100px'
        }}
        >
        <FormContainer

        >

            {/* <h2>Welcome back, {profile.owner}!</h2> */}
        <form
            className="space-y-8 pb-10 mt-8"
            action={updateUsername}
            >
            <Input
                    label="UsernName"
                    type='text'
                    name='username'
                    placeholder={profile.username || "Username"}
                    defaultValue={profile.username} 
                    className='cursor-pointer'
                />
            <div className='flex gap-4'>

            <Input
            label="Age"
            type='number'
            name='age'
            placeholder={profile.age || "Age"}
            defaultValue={profile.age}
            className='cursor-pointer'
            />
            <Input
            label="Weight"
            type='number'
            name='weight'
            placeholder={profile.weight || "Weight"}
            defaultValue={profile.weight}
            />
            </div>
            <div className='flex w-full'>
            <div className="flex items-center gap-4 justify-center">

            <label className="text-sm">Gender:</label>
            <div className="flex items-center gap-2">
            <input
                 type="radio"
                 name="gender"
                 defaultValue={profile?.male || "male"}
                 checked={profile.gender === "male"} // Check if the gender in profile is male

                 className="form-radio h-4 w-4 text-primary focus:ring-primary"
            />
            <label htmlFor="male" className="text-sm">Male</label>

            </div>
            <div className="flex items-center gap-2">
            <input
                type="radio"
                name="gender"
                defaultValue={profile?.female || "Female"}
                checked={profile.gender === "female"} // Check if the gender in profile is female
                className="form-radio h-4 w-4 text-primary focus:ring-primary"

                />
            <label htmlFor="female" className="text-sm">Female</label>
            </div>
           </div>
            </div>
            <div className="relative">
            <select
                className="block text-center appearance-none w-full dark:bg-gray-900 border py-3 px-4 pr-8 rounded-lg leading-tight focus:outline-none  focus:border-gray-500"
                name="goal"
                defaultValue={profile?.goal || "Goal"}
                >
                <option value="lose">Lose Weight</option>
                <option value="maintain">Maintain Weight</option>
                <option value="gain">Gain Weight</option>                
            </select>
              </div>
              <div className='flex flex-col items-center'>
                <label>Activity Level</label>
                <div className='flex items-center gap-2'>
                    <input
                          type="checkbox"
                          name="activityLevel"
                          checked={profile.activityLevel === 'sedentary'}
                          defaultValue={profile?.activityLevel || "sedentary"}


                    />
                </div>
              </div>
            <Button
            size="lg"
            className='text-center w-full'
            endContent={<FiPlus/>}
            type='submit'>Update</Button>
            </form> 
            </FormContainer>
        </div>
    );
}

export default AccountPage

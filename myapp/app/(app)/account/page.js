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

const AccountPage = async ({ searchParams }) => {
    const session = await getServerSession(authOptions)
    const desiredUsername = searchParams.desiredUsername
    if (!session) {
        return redirect('/')
    }
    await connectDB()
    const profile = await Profile.findOne({ owner: session?.user?.email })

    if (!profile) {
        // If no profile found, render the form to create a new profile
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

    // If profile found, render the components related to the profile
    const leanPage = cloneDeep(profile.toJSON());
    leanPage._id = leanPage._id.toString();

    return (
        <>
            <h2>It works</h2>
            {/* <PageSettingsForm page={leanPage} user={session.user} />
            <PageButtonsForm page={leanPage} user={session.user} />
            <PageLinksForm page={leanPage} user={session.user} /> */}
        </>
    );
}

export default AccountPage

import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import UsernameForm from '@/components/Forms/UsernameForm'
import HeroText from '@/components/HomePage/HeroText'
import SetupContainer from '@/components/HomePage/SetupContainer'
import FormContainer from '@/components/shared/FormContainer'
import { getServerSession } from 'next-auth'
import React from 'react'

const AccountPage = async ({searchParams}) => {
    const session = await getServerSession(authOptions)
    const desiredUsername = searchParams.desiredUsername
  return (
  <SetupContainer>
    <HeroText
       heading="Setup Your Username"
       subtext="Think Of Something Good That Describes & Motivates You"
    />
    <FormContainer>
      <UsernameForm desiredUsername={desiredUsername}/>
    </FormContainer>
  </SetupContainer>
  )
}

export default AccountPage
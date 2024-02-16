import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import UpdateForm from '@/components/Account/UpdateForm'
import connectDB from '@/lib/db'
import Profile from '@/models/Profile'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/dist/server/api-utils'
import React from 'react'

const AccountUpdate = async ({ searchParams }) => {
    const session = await getServerSession(authOptions)
    if (!session) {
      return redirect('/')
  }
  await connectDB()
  const profile = await Profile.findOne({ owner: session?.user?.email })
  if (!profile) {
    return redirect('/')

  }
  return (
    <div>
      UpdateAccount
    </div>
  )
}

export default AccountUpdate
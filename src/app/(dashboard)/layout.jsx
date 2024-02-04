import React from 'react'

import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from "next/navigation"

//components:
import Navbar from '../components/Navbar'

export default async function DashboardLayout({ children }) {
  const cookieStore = cookies()
  const supabase = createServerComponentClient({ cookies: () => cookieStore })
  const {data} = await supabase.auth.getSession();

  if(!data.session) {
    redirect('/login')
  }

  return (
    <>
       <Navbar user={data.session.user} />
       {children}
    </>
  )
}

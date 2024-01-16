import { NextResponse } from "next/server"
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export const dynamic = 'force-dynamic'

export async function POST(request) {
  const ticket = await request.json()

  // get supabase instance
  const supabase = createRouteHandlerClient({cookies});


  // get the current user session
  const { data: {session} } = await supabase.auth.getSession()

  // insert the data into supabase
  const { data, error } = await supabase.from('tickets')
  .insert({
    ...ticket,
    user_email: session.user.email
  })
  .select()
  .single()

  return NextResponse.json({data, error});

}


// changing from old way to different way:
// /api/tickets
// this is just a demonstration, but you should do api calls from the server

// export const dynamic = 'force-dynamic'

// export async function GET() {
//   const res = await fetch('http://localhost:4000/tickets')

//   const tickets = await res.json()

//  return NextResponse.json(tickets, {
//   status: 200
//  })
// }

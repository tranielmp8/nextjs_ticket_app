import { NextResponse } from "next/server"
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
// /api/tickets
// this is just a demonstration, but you should do api calls from the server

export async function DELETE(_, {params}) {
  const id = params.id
  
  const supabase = createRouteHandlerClient({cookies});

  const { error } = await supabase.from('tickets')
  .delete()
  .eq('id', id)

  return NextResponse.json({error})

}
import Link from "next/link"
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'


async function getTickets() {
  const supabase = createServerComponentClient({cookies})

  const {data, error} = await supabase.from('tickets')
  .select()

  if (error) {
    console.log(error.message)
  }

  return data

}

export default async function TicketList() {
// imitate delay
await new Promise(resolve => setTimeout(resolve, 1000))  
  //
  const tickets = await getTickets()

  return (
    <>
      {tickets.map((ticket) => (
        <div key={ticket.id} className="card my-5">
          <Link href={`/tickets/${ticket.id}`}>
            <h3>{ticket.title}</h3>
            <p>{ticket.body.slice(0, 200)}...</p>
            <div className={`pill ${ticket.priority}`} >
              {ticket.priority} priority
            </div>
          </Link>
        </div>
      ))}
      {tickets.length === 0 && (
        <p className="text-center">There are no open tickets, yippee!!!</p>
      )}
    </>
  )
}

// app/tickets/[id] <- can be named anything, but we are using the id so we will call it that. this is the GET a single ticket
import { notFound } from "next/navigation";
import { cookies } from "next/headers";
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import DeleteButton from "./DeleteButton";

export const dynamicParams = true;

export async function generateMetadata({params}){
  const cookieStore = cookies()
  const supabase = createServerComponentClient({ cookies: () => cookieStore })

  const {data: ticket} = await supabase.from('tickets')
  .select()
  .eq('id', params.id)
  .single() //get a single document not in array format

  return {
    title: `Dojo Helpdesk | ${ticket?.title || 'Ticket Not Found'}`
  }
}

async function getTicket(id) {
  // imitate delay
  const supabase = createServerComponentClient({cookies})

  const {data} = await supabase.from('tickets')
  .select()
  .eq('id', id)
  .single() //get a single document not in array format

    if(!data){
      notFound()
    }

    return data

}

export default async function TicketDetails({ params }) {
  const ticket = await getTicket(params.id)

  const supabase = createServerComponentClient({cookies})
  const { data } = await supabase.auth.getSession()

  return (
    <main>
      <nav>
        <h2>TicketDetails</h2>
        <div className="ml-auto">
          {data.session.user.email === ticket.user_email && (
            <DeleteButton id={ticket.id}/>
          )}
        </div>
      </nav>
      <div className="card">
        <h3>{ticket.title}</h3>
        <small>Created by {ticket.user_email}</small>
        <p>{ticket.body}</p>
        <div className={`pill ${ticket.priority}`} >
            {ticket.priority} priority
        </div>
      </div>
    </main>
  )
}

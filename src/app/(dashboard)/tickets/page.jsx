import { Suspense } from "react";
import Link from "next/link";
import Loading from "../loading";
import TicketList from "./TicketList";

export const runtime = "edge"

export default function Tickets() {
  return (
    <main>
      <nav>
        <div>
          <h2>Tickets</h2>
          <p><small>Current open tickets</small></p>
        </div>
        <Link href="/tickets/create" className="ml-auto">
          <button className="btn-primary">New Ticket</button>
        </Link>
      </nav>

      <Suspense fallback={<Loading />} >
        <TicketList />
      </Suspense>
    </main>
  )
}

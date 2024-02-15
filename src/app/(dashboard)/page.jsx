import Link from "next/link"
export const runtime = "edge"

export default function Home() {
  return (
    <main>
      <h1 className="text-xl text-center mb-5">Dashboard</h1>
      <p className="text-center">TicketMaster is an application which allows you to create a ticket request to help with job functions. Depending on the job priority the tickets will be completed in the order which they were received. <br /> If there are any updates please see the information below. thank you</p>

      <div className="flex justify-center my-8">
        <Link href="/tickets">
          <button className="btn-primary">View Tickets</button>
        </Link>
      </div>

      <h2>Company Updates</h2>

      <div className="card">
        <h3>New member of the web dev team...</h3>
        <p>Test Data: Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, at quam. Dolores omnis possimus quam soluta rerum illo laborum ullam pariatur molestiae, modi beatae corrupti.</p>
      </div>
      <div className="card">
        <h3>New website live!</h3>
        <p>More Test Data: Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, at quam. Dolores omnis possimus quam soluta rerum illo laborum ullam pariatur molestiae, modi beatae corrupti, assumenda distinctio adipisci, cupiditate minima eum vitae? Similique dicta est facilis debitis, autem temporibus quo repellat illum unde id iste veritatis eveniet, aspernatur enim quas.</p>
      </div>
    </main>
  )
}

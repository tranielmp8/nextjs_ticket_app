import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/../public/images/requests.png' // name it what you want we named it Logo
import LogoutButton from './LogoutButton'

export default function Navbar({ user }) {
  return (
    <nav>
      <Image 
        src={Logo}
        alt='Dojo Helpdesk Logo'
        width={70}
        quality={100}
        placeholder='blur'
      />
      <h1>TicketMaster</h1>
      <Link href="/" >Dashboard</Link>
      <Link className='mr-auto' href="/tickets" >Tickets</Link>

      {user && <span>Hello,  {user.email}</span>}
      <LogoutButton />
    </nav>
  )
}

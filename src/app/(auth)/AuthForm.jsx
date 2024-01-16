"use client"
import { useState } from "react"

export default function AuthForm({handleSubmit}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // will not create submit function here bc using this form in both Login and Signup. they need to be different

  return (
    <form onSubmit={(e) => {handleSubmit(e, email, password)}}>
      <label>
        <span>Email:</span>
        <input 
          type="email" 
          onChange={(e)=>setEmail(e.target.value)}
          value={email}
          required
          />
      </label>
      <label>
        <span>Password:</span>
        <input 
          type="password" 
          onChange={(e)=>setPassword(e.target.value)}
          value={password}
          required
          />
      </label>
      <button className="btn-primary">Submit</button>
    </form>
  )
}

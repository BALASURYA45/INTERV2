'use client';
import { useSession } from 'next-auth/react'

export default function LoginPage() {
    const{data:session}=useSession();
    if(session){
    return (
    <div>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}
}
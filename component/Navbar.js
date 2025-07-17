'use client'
import { signOut,useSession} from "next-auth/react";


export default function Navbar() {
  const{data:session}=useSession();
  console.log(session);
  if(session){
   return(
    <>
    <p>You are not signed in as a user{session.user.email}</p>
   
    <button onClick={()=>signOut()}>Sign Out</button>
    </>
   )
  }
}
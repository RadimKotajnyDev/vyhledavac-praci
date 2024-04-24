'use server'
import {redirect} from 'next/navigation'

import {createClient} from '@/utils/supabase/server'
import {SignOutButton} from "@/app/admin/components/SignOutButton";
import AdminPanel from "@/app/admin/components/AdminPanel";

export default async function AdminPage() {
  const supabase = createClient()

  const {data, error} = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/login')
  }

  /* TODO: restrict access only for admin */
  if(data.user.role != "supabase_admin") {
    redirect("/permission-denied")
  }



  return (
    <div>
      <p>Hello {data.user.email}</p>
      <p>You are {data.user.role}.</p>
      <SignOutButton />
      <AdminPanel />
    </div>
  )
}
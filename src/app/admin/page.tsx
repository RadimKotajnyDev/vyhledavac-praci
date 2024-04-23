import {redirect} from 'next/navigation'

import {createClient} from '@/utils/supabase/server'
import {SignOutButton} from "@/app/admin/components/SignOutButton";

export default async function AdminPage() {
  const supabase = createClient()

  const {data, error} = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/login')
  }
  if(data.user.role != "supabase_admin") {
    redirect("/permission-denied")
  }

  return (
    <p>Hello
      {data.user.email}
      <p>You are {data.user.role}.</p>
      <SignOutButton />
    </p>)
}
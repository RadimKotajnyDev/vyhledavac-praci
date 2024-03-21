import {redirect} from 'next/navigation'

import {createClient} from '@/utils/supabase/server'
import {logout} from "@/app/login/actions";
import {Logout} from "@/app/components/Logout";

export default async function AdminPage() {
  const supabase = createClient()

  const {data, error} = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/login')
  }

  return (
    <>
      <p>Hello {data.user.email}</p>
      <Logout />
    </>
  )
}
'use server'
import {redirect} from 'next/navigation'

import {createClient} from '@/utils/supabase/server'
import {SignOutButton} from "@/app/admin/components/SignOutButton";
import AdminPanel from "@/app/admin/components/AdminPanel";


export default async function AdminPage() {
    const supabase = createClient()

    const {data, error} = await supabase.auth.getUser()
    if (error || !data?.user) {
        console.log(error)
        redirect('/login')
    }

    const {data: profileData, error: profileError} = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', data.user.id)
        .single()

    if (profileError) {
        console.error('Error fetching profile:', profileError.message)
        redirect('/permission-denied')
    }

    if (profileData?.role === "admin") {
        return (
            <div>
                <p>Hello {data.user.email}</p>
                <p>You are {profileData.role}.</p>
                <SignOutButton/>
                <AdminPanel/>
            </div>
        )
    }
}
'use server'

import {revalidatePath} from 'next/cache'
import {redirect} from 'next/navigation'

import {createClient} from '@/utils/supabase/server'

export async function login(formData: FormData) {
  const supabase = createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const loginCredentials = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error} = await supabase.auth.signInWithPassword(loginCredentials)

  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/admin')
}

export async function signup(formData: FormData) {
  const supabase = createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const {error} = await supabase.auth.signUp(data)

  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/admin')
}

export async function signOut() {
  const supabase = createClient()

  try {
    const {error} = await supabase.auth.signOut();

    if (error) {
      console.error('Error signing out:', error);
      // Handle errors appropriately (e.g., redirect to error page)
      return redirect('/error');
    }

    // Clear server-side session data (if applicable)
    // ... (Your implementation for clearing server-side session data)

    // Invalidate cached paths (optional)
    await revalidatePath('/', 'layout'); // Revalidate the root path and layout

    // Redirect to login page or desired post-logout destination
    return redirect('/login');
  } catch (error) {
    console.error('Unexpected error during sign out:', error);
    // Handle unexpected errors (e.g., redirect to error page)
    return redirect('/error');
  }
}
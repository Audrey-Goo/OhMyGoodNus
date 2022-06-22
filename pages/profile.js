import React from 'react'
import Header from '../components/Header'
import Profile from '../components/Profile'
import PostsProfile from '../components/PostsProfile'
import ModalProfile from '../components/ModalProfile'
import { useSession } from "next-auth/react"

export default function PProfile() {
    const { data: session } = useSession();

    return (
        <main className={`grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto ${session &&
        "!grid-cols-1 !max"}`}>
          <section className='col-span-2'>
          <Header />
            <Profile />
            <PostsProfile />
          </section>
    
          <ModalProfile />
          {/* {session && (
            <section className='hidden xl:inline-grid md:col-span-1'>
              <div className='fixed top-20'>
                <Profile />
                <PostsProfile />
              </div>
            </section>
          )} */}
        </main>
      )
}


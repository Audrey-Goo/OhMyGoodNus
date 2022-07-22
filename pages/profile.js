import React from 'react'
import Header from '../components/Header'
import Profile from '../components/Profile'
import PostsProfile from '../components/PostsProfile'
import ModalProfile from '../components/ModalProfile'
import { useSession } from "next-auth/react"

export default function PProfile() {
    const { data: session } = useSession();

    return (
        <main className={`bg-beige p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 ${session &&
        "!grid-cols-1 !max"}`}>
          <section className='col-span-2'>
          <Header />
            <Profile />
          </section>
          <div className="grid grid-cols-4">
            <PostsProfile />
          </div>

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


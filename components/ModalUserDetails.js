/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { useRecoilState } from 'recoil'
import { modalUserDetailsState } from "../atoms/modalUserDetailsAtom"
import { Dialog, Transition } from "@headlessui/react"
import { CameraIcon } from '@heroicons/react/outline'
import { Fragment, useRef, useState } from 'react';
import { db, storage } from "../firebase"
import { setDoc, collection, serverTimestamp, updateDoc, doc } from "@firebase/firestore"
import { useSession } from "next-auth/react"
import { ref, getDownloadURL, uploadString } from "@firebase/storage"

function ModalUserDetails() {
    const { data: session } = useSession()
    const[open, setOpen] = useRecoilState(modalUserDetailsState)
    const textRef = useRef(null);
    const websiteRef = useRef(null)
    const [loading, setLoading] = useState(false)


    const uploadDetails = async () => {
        if (loading) return;

        setLoading(true);

        const docRef = await setDoc(doc(db, 'userDetails', session.user.username), {
            username: session.user.username,
            text: textRef.current.value,
            website: websiteRef.current.value,
            timestamp: serverTimestamp()
        })

        // console.log("Updated doc added with ID", docRef.id)

        setOpen(false)
        setLoading(false)
    }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as='div' className="fixed z-10 inset-0 overflow-y-auto" onClose={setOpen}>
        <div className='flex items-end justify-center min-h-[800px] sm:min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
          <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom='opacity-0' enterTo='opacity-100' leave="ease-in duration-200"
          leaveFrom='opacity-100' leaveTo='opacity-0'>
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />    
          </Transition.Child>

          <span className='hidden sm:inline-block sm:align-middle sm:h-screen' aria-hidden="true">&#8203;</span>

          <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
          enterTo='opacity-100 translate-y-0 sm:scale-100' leave="ease-in duration-200"
          leaveFrom='opacity-100 translate-y-0 sm:scale-100' leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'>

            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all
            sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
              <div>
                <div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                        Enter Profile Details
                    </Dialog.Title>

                    <div className='mt-2'>
                      <input className='border-none focus:ring-0 w-full text-center' type='text' ref={textRef} placeholder='Enter Text.' />
                    </div>

                    <div className='mt-2'>
                      <input className='border-none focus:ring-0 w-full text-center' type='text' ref={websiteRef} placeholder='Enter Website' />
                    </div>
                  </div>
                </div>

                <div className='mt-5 sm:mt-6'>
                  <button type="button" className='inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2
                  bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500
                  sm:text-sm disabled:bg-gray-300 disabled:cursor-not-allowed hover:disabled:bg-gray-300' onClick={uploadDetails}>
                    {loading ? "Updating..." : "Update User Details"}
                  </button>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default ModalUserDetails
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import {
    CogIcon
} from '@heroicons/react/outline';
import ModalUserDetails from '../components/ModalUserDetails'

import { useSession } from "next-auth/react"
import { useState, useEffect } from 'react'
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from '../firebase'
import { useRecoilState } from 'recoil'
import { modalUserDetailsState } from "../atoms/modalUserDetailsAtom" 

const Profile = () => {
    const { data: session } = useSession();
    const [numPost, setNumPost] = useState(0);
    const [open, setOpen] = useRecoilState(modalUserDetailsState)
    const [text, setText] = useState("");
    const [website, setWebsite] = useState("");

    useEffect(() => {
        onSnapshot(query(collection(db,'profilePosts'), where("username", "==", session?.user?.username)), snapshot => {
            var count = 0
            snapshot.forEach((doc) => {
                count += 1;
            });
            setNumPost(count)
         });

        onSnapshot(query(collection(db,'userDetails'), where("username", "==", session?.user?.username)), snapshot => {
            snapshot.forEach((doc) => {
                if (doc.get("text") !== undefined) {
                    setText(doc.get("text"));
                };
                if (doc.get("website") !== undefined) {
                    setWebsite(doc.get("website"));
                };
            });
         });
         
        
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    , [db])

    return (
        <div className = "max-w-6xl mx-auto p-10 xl:mx-auto">
            <div className=""
            >
                <div className='avatar'>
                    <div className='rounded-full w-36 h-36'>
                        <img src={session?.user?.image} /> 
                    </div>
                </div>
                <div className='col-span-2'>
                    <span className='text-gray-700 text-2xl mr-4'>{session?.user?.username}</span>
                    <button className='cursor-pointer inline text-sm text-gray-700
                    font-semibold p-1 px-2 border border-gray-200 rounded mr-4' onClick={() => setOpen(true)}>Edit 
                    Profile</button>
                    <CogIcon className='cursor-pointer h-6 inline flex-1' />
                    <div className='mt-4 flex'>
                        <div className='ml-4'><span className='font-semibold'>{numPost}</span> posts</div>
                        <div className='ml-4'><span className='font-semibold'>200</span> followers </div>
                        <div className='m1-4'><span className='font-semibold'> 200</span> following</div>
                    </div>
                    <div >
                        <div className='  pt-3'>
                        <span className='text-lg font-semibold text-gray-700'>{text}</span>
                        </div>
                        <div className='  pt-3'>
                            <p className='text-base font-medium text-blue-700-mr-2'>{website}</p>
                        </div>
                    </div>
                </div>

            <ModalUserDetails />


            </div>
            <hr className='border-gray-500 mt-6' />
            <div className='flex justify-center gap-10'>
                <button className='focus:border-t border-gray-800 py-4 text-sm font-semibold flex gap-2 text-gray-400 focus:text-gray-600'><CogIcon size='lg'/>POSTS</button>
                <button className='focus:border-t border-gray-800 py-4 text-sm font-semibold flex gap-2 text-gray-400 focus:text-gray-600'><CogIcon className='h-6'/>VIDEOS</button>
                <button className='focus:border-t border-gray-800 py-4 text-sm font-semibold flex gap-2 text-gray-400 focus:text-gray-600'><CogIcon className='h-6'/>SAVED</button>
                <button className='focus:border-t border-gray-800 py-4 text-sm font-semibold flex gap-2 text-gray-400 focus:text-gray-600'><CogIcon size='lg'/>TAGGED</button>
            </div>
        </div>

        
    )
}


export default Profile
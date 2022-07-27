import React from 'react'
import Head from "next/head"
import Sidebar from "../components/Sidebar"
import Chat from "../components/Chat"
import { SessionProvider } from "next-auth/react"
import { RecoilRoot } from "recoil"
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, db, provider } from "../firebase"
import { getFirestore } from "firebase/firestore";
import { useEffect } from 'react'
import { useSession } from "next-auth/react"
import { addDoc, collection, onSnapshot, orderBy, serverTimestamp, query, setDoc, deleteDoc, doc } from 'firebase/firestore';
import { getAuth, onAuthStateChanged, signInWithRedirect } from "firebase/auth";
import { ChakraProvider } from '@chakra-ui/react'


export default function ChatTwo() {
  const { data: session } = useSession();

  const userRef = doc(db, "users", 'pls#' + session.user.uid) // Don't know how to auto-generate ID 

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user ) => {
  //     if (user) {
  //       const userRef = doc(db, "users", "pls#" + user.uid)
  //       setDoc(userRef, {
  //         email: user.email,
  //         lastSeen: serverTimestamp(),
  //         photoURL : user.photoURL, 
  //       }, 
  //       {merge:true})
  //     } else {
  //       console.log("Hello Fail")
  //     }
  //   })
  // })

  useEffect(() => {
    if (session.user) {
      setDoc(userRef, {
         email: session.user.email,
         lastSeen: serverTimestamp(),
         photoURL: session.user.image,
      },
      {merge:true})
    }
  }, [session.user, userRef])

    return (
        <div className='bg-brown'>
        <Sidebar />
        <Chat />  
        </div>
    )
}
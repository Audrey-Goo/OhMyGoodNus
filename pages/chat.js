import React from 'react'
import Head from "next/head"
import Sidebar from "../components/Sidebar"
import Chat from "../components/Chat"
import { SessionProvider } from "next-auth/react"
import { RecoilRoot } from "recoil"
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, db } from "../firebase"
import { getFirestore } from "firebase/firestore";
import { useEffect } from 'react'
import { useSession } from "next-auth/react"
import { addDoc, collection, onSnapshot, orderBy, serverTimestamp, query, setDoc, deleteDoc, doc } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { ChakraProvider } from '@chakra-ui/react'


export default function ChatTwo() {
  const { data: session } = useSession();
  const userRef = doc(db, "users", session.user.uid) // Don't know how to auto-generate ID 
  //const userRef = doc(collection(db,"users")) Will keep adding new document instead of overwriting

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
        <div>
        <Sidebar />
        <Chat />
        </div>
    )
}